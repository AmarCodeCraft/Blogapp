const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const transporter = require("../config/nodemailer");
const auth = require("../middleware/auth");

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Try to send verification email, but don't fail registration if email fails
    const mailOptions = {
      from: 'info@yourdomain.com',
      to: user.email,
      subject: "Email Verification",
      text: `Please verify your email by clicking on the following link: \n\n ${process.env.CLIENT_URL}/verify/${token}`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailErr) {
      console.error("Email sending failed:", emailErr.message);
      // Continue with registration even if email fails
    }

    // Return token for immediate login
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error during registration" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    // Remove email verification requirement for login
    // if (!user.isVerified) {
    //   return res.status(400).json({ msg: 'Please verify your email first' });
    // }
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error during login" });
  }
});

// Get user
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Verify
router.get("/verify/:token", async (req, res) => {
  try {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
    await User.findByIdAndUpdate(decoded.user.id, { isVerified: true });
    res.json({ msg: "Email verified successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Invalid token" });
  }
});

module.exports = router;
