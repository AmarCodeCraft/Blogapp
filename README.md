# ModernBlog 🚀

A modern, professional blogging platform built with React.js and Node.js featuring a sleek design, user authentication, and comprehensive content management.

![ModernBlog](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-61dafb.svg)
![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

### 🎨 **Modern Design**

- **Glassmorphism UI**: Beautiful frosted glass effects with backdrop blur
- **Gradient Themes**: Professional gradient color schemes throughout
- **Responsive Design**: Mobile-first approach with seamless responsive layout
- **Dark/Light Themes**: Adaptive styling for better user experience
- **Micro-interactions**: Smooth animations and hover effects

### 🔐 **Authentication System**

- **User Registration**: Secure account creation with email verification
- **Login/Logout**: JWT-based authentication system
- **Protected Routes**: Secure access to user-specific features
- **Profile Management**: Comprehensive user profile with statistics
- **Password Security**: Bcrypt hashing for secure password storage

### 📝 **Content Management**

- **Rich Text Editor**: Create and edit blog posts with formatting
- **Image Upload**: Support for post images with cloud storage
- **Draft System**: Save drafts and publish when ready
- **Post Categories**: Organize content with tagging system
- **SEO Friendly**: Optimized URLs and meta descriptions

### 📱 **User Experience**

- **Dashboard**: Personal dashboard with post management
- **Writing Guide**: Comprehensive guide for content creation
- **FAQ System**: Interactive FAQ with search functionality
- **Help Center**: Detailed documentation and support
- **Contact Forms**: Multiple contact methods with form validation

### 🔧 **Developer Features**

- **Modern Stack**: React 19, Node.js, Express, MongoDB
- **API Architecture**: RESTful API design with proper error handling
- **Code Organization**: Modular component structure
- **Environment Config**: Secure environment variable management

### 🔍 **SEO Optimization**

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Facebook and social media optimization
- **Twitter Cards**: Enhanced Twitter sharing with rich previews
- **Structured Data**: JSON-LD schema markup for rich snippets
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Proper search engine directives
- **Canonical URLs**: Prevent duplicate content issues
- **Performance**: Optimized loading with preload and prefetch
- **Mobile SEO**: Mobile-first indexing ready
- **Analytics Ready**: Google Analytics integration support
- **Error Boundaries**: Graceful error handling and user feedback

## 🛠️ Tech Stack

### **Frontend**

- **React.js 19.1.0** - Modern React with hooks and context
- **React Router DOM 7.7.0** - Client-side routing
- **Axios 1.10.0** - HTTP client for API requests
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### **Backend**

- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web application framework
- **MongoDB 8.16.4** - NoSQL database with Mongoose ODM
- **JWT 9.0.2** - JSON Web Tokens for authentication
- **Bcrypt.js 3.0.2** - Password hashing library
- **Nodemailer** - Email sending service
- **Cloudinary** - Image upload and management

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AmarCodeCraft/Blogapp.git
   cd Blogapp
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create `.env` file in the backend directory:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/modernblog

   # JWT Secret
   JWT_SECRET=your_super_secret_jwt_key_here

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Cloudinary (for image uploads)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Client URL
   CLIENT_URL=http://localhost:5173
   ```

5. **Start the Application**

   Backend (Terminal 1):

   ```bash
   cd backend
   npm run dev
   ```

   Frontend (Terminal 2):

   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
modernblog/
├── backend/
│   ├── config/
│   │   └── nodemailer.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── BlogPost.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   ├── uploads/
│   ├── .env
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HelpCenter.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PostDetails.jsx
│   │   │   ├── PostForm.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── TermsOfService.jsx
│   │   │   ├── Verify.jsx
│   │   │   └── WritingGuide.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## 🔗 API Endpoints

### **Authentication**

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth` - Get current user
- `GET /api/auth/verify/:token` - Email verification

### **Blog Posts**

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (Protected)
- `PUT /api/posts/:id` - Update post (Protected)
- `DELETE /api/posts/:id` - Delete post (Protected)
- `GET /api/posts/user` - Get user's posts (Protected)

## 📱 Pages & Features

### **Public Pages**

- **Home** (`/`) - Blog post listing with search and filters
- **About** (`/about`) - Platform information and mission
- **Contact** (`/contact`) - Contact form with validation
- **Writing Guide** (`/writing-guide`) - Comprehensive blogging guide
- **FAQ** (`/faq`) - Interactive frequently asked questions
- **Help Center** (`/help`) - Documentation and support resources
- **Terms of Service** (`/terms`) - Legal terms and conditions
- **Privacy Policy** (`/privacy`) - Privacy and data protection policy

### **Authentication Pages**

- **Login** (`/login`) - User authentication with modern design
- **Register** (`/register`) - Account creation with validation
- **Verify** (`/verify/:token`) - Email verification with status tracking

### **Protected Pages**

- **Profile** (`/profile`) - User dashboard with post management
- **Create Post** (`/create`) - Rich text editor for new posts
- **Edit Post** (`/edit/:id`) - Post editing interface
- **Post Details** (`/post/:id`) - Individual post view with comments

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue to Indigo gradients
- **Secondary**: Emerald to Teal gradients
- **Accent**: Purple to Pink gradients
- **Neutral**: Slate color variations
- **Success**: Green tones
- **Warning**: Amber/Yellow tones
- **Error**: Red to Rose gradients

### **Typography**

- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts with proper line height
- **UI Text**: Medium weight for better contrast

### **Components**

- **Glassmorphism**: Backdrop blur with transparency
- **Rounded Corners**: Consistent border radius (xl, 2xl)
- **Shadows**: Layered shadows for depth
- **Animations**: Smooth transitions and hover effects

## 🔧 Development

### **Available Scripts**

**Frontend:**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

**Backend:**

```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

### **Environment Variables**

Required environment variables for backend:

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `EMAIL_HOST` - SMTP server host
- `EMAIL_PORT` - SMTP server port
- `EMAIL_USER` - Email account username
- `EMAIL_PASS` - Email account password
- `CLOUDINARY_*` - Cloudinary configuration
- `CLIENT_URL` - Frontend URL for CORS

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**AmarCodeCraft**

- GitHub: [@AmarCodeCraft](https://github.com/AmarCodeCraft)
- Repository: [Blogapp](https://github.com/AmarCodeCraft/Blogapp)

## 🙏 Acknowledgments

- React.js community for the amazing framework
- Tailwind CSS for the utility-first styling approach
- MongoDB for the flexible NoSQL database
- All open-source contributors who made this project possible

## 📞 Support

If you have any questions or need support, please:

1. Check the [FAQ page](/faq) in the application
2. Visit the [Help Center](/help) for documentation
3. Create an issue on GitHub
4. Contact through the [Contact page](/contact)

---

**Made with ❤️ by AmarCodeCraft**
