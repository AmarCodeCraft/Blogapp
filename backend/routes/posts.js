const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });
const auth = require('../middleware/auth');

// GET all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single blog post
router.get('/:id', getPost, (req, res) => {
  res.json(res.post);
});

// CREATE a new blog post
router.post('/', auth, upload.single('image'), async (req, res) => {
  const post = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    author: req.user.id,
    imageUrl: req.file ? req.file.path : '',
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a blog post
router.put('/:id', auth, getPost, upload.single('image'), async (req, res) => {
  if (req.user.id !== res.post.author.toString()) {
    return res.status(401).json({ msg: 'User not authorized' });
  }
  if (req.body.title != null) {
    res.post.title = req.body.title;
  }
  if (req.body.content != null) {
    res.post.content = req.body.content;
  }
  if (req.body.author != null) {
    res.post.author = req.body.author;
  }
  if (req.file) {
    res.post.imageUrl = req.file.path;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a blog post
router.delete('/:id', auth, getPost, async (req, res) => {
  try {
    if (req.user.id !== res.post.author.toString()) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await res.post.deleteOne();
    res.json({ message: 'Deleted Post' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getPost(req, res, next) {
  let post;
  try {
    post = await BlogPost.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: 'Cannot find post' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.post = post;
  next();
}

module.exports = router;
