// SEO utility functions
export const updateMetaTag = (name, content, property = false) => {
  const attribute = property ? "property" : "name";
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

export const updateCanonicalUrl = (url) => {
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute("href", `${window.location.origin}${url}`);
};

export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim("-"); // Remove leading/trailing hyphens
};

export const truncateText = (text, length = 160) => {
  if (text.length <= length) return text;
  return text.substring(0, length).replace(/\s+\S*$/, "") + "...";
};

export const generateArticleSchema = (post, author) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || truncateText(post.content),
    image: post.image
      ? `${window.location.origin}${post.image}`
      : `${window.location.origin}/og-image.jpg`,
    author: {
      "@type": "Person",
      name: author.name || author.username,
      url: `${window.location.origin}/author/${author.username}`,
    },
    publisher: {
      "@type": "Organization",
      name: "ModernBlog",
      logo: {
        "@type": "ImageObject",
        url: `${window.location.origin}/logo.png`,
      },
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${window.location.origin}/post/${post.slug || post._id}`,
    },
    articleSection: post.category,
    keywords: post.tags ? post.tags.join(", ") : "",
    wordCount: post.content ? post.content.split(" ").length : 0,
  };
};

export const injectStructuredData = (data, id = "structured-data") => {
  // Remove existing structured data
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  script.id = id;
  document.head.appendChild(script);
};

export const removeStructuredData = (id = "structured-data") => {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
};

// Default SEO data
export const defaultSEO = {
  title: "ModernBlog - Professional Blogging Platform",
  description:
    "ModernBlog is a professional blogging platform where writers create compelling content, share stories, and build engaged communities.",
  keywords:
    "blog, blogging platform, writing, content creation, professional blog, modern blog",
  image: "/og-image.jpg",
  type: "website",
  author: "AmarCodeCraft",
};

// SEO data for specific pages
export const pageSEO = {
  home: {
    title:
      "ModernBlog - Professional Blogging Platform | Create, Share & Engage",
    description:
      "Discover amazing stories, share your thoughts, and connect with a community of passionate writers and readers from around the world.",
    keywords:
      "blog, blogging platform, writing, content creation, professional blog, modern blog, writing community",
    url: "/",
  },
  blog: {
    title: "Blog Posts - ModernBlog | Latest Articles & Stories",
    description:
      "Explore our collection of engaging blog posts covering technology, lifestyle, travel, and more. Join our community of writers and readers.",
    keywords:
      "blog posts, articles, stories, writing, content, technology, lifestyle, travel",
    url: "/blog",
  },
  about: {
    title: "About ModernBlog | Professional Blogging Platform",
    description:
      "Learn about ModernBlog's mission to provide a professional platform for writers to create, share, and connect with readers worldwide.",
    keywords:
      "about modernblog, blogging platform, writing community, professional blog",
    url: "/about",
  },
  contact: {
    title: "Contact Us - ModernBlog | Get in Touch",
    description:
      "Have questions or feedback? Contact the ModernBlog team. We'd love to hear from you and help with any inquiries.",
    keywords: "contact modernblog, support, feedback, help, get in touch",
    url: "/contact",
  },
  login: {
    title: "Login - ModernBlog | Access Your Account",
    description:
      "Sign in to your ModernBlog account to create posts, manage your profile, and engage with the writing community.",
    keywords: "login, sign in, account access, modernblog account",
    url: "/login",
  },
  register: {
    title: "Join ModernBlog | Create Your Account Today",
    description:
      "Join thousands of writers on ModernBlog. Create your account today and start sharing your stories with the world.",
    keywords:
      "register, sign up, join modernblog, create account, writing community",
    url: "/register",
  },
};
