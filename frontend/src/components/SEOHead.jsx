import { useEffect } from "react";

const SEOHead = ({
  title = "ModernBlog - Professional Blogging Platform",
  description = "ModernBlog is a professional blogging platform where writers create compelling content, share stories, and build engaged communities.",
  keywords = "blog, blogging platform, writing, content creation, professional blog, modern blog",
  image = "/og-image.jpg",
  url = "",
  type = "website",
  author = "AmarCodeCraft",
  publishedTime = "",
  modifiedTime = "",
  section = "",
  tags = [],
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", `${window.location.origin}${image}`, true);
    updateMetaTag("og:url", `${window.location.origin}${url}`, true);
    updateMetaTag("og:type", type, true);

    // Twitter Card tags
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${window.location.origin}${image}`);

    // Article specific tags (for blog posts)
    if (type === "article") {
      if (publishedTime)
        updateMetaTag("article:published_time", publishedTime, true);
      if (modifiedTime)
        updateMetaTag("article:modified_time", modifiedTime, true);
      if (author) updateMetaTag("article:author", author, true);
      if (section) updateMetaTag("article:section", section, true);

      // Article tags
      tags.forEach((tag) => {
        const tagElement = document.createElement("meta");
        tagElement.setAttribute("property", "article:tag");
        tagElement.setAttribute("content", tag);
        document.head.appendChild(tagElement);
      });
    }

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", `${window.location.origin}${url}`);

    // Cleanup function to remove article tags on unmount
    return () => {
      if (type === "article") {
        const articleTags = document.querySelectorAll(
          'meta[property="article:tag"]'
        );
        articleTags.forEach((tag) => tag.remove());
      }
    };
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
  ]);

  return null; // This component doesn't render anything
};

// Hook for easy SEO management
export const useSEO = (seoData) => {
  useEffect(() => {
    // Update document title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta description
    if (seoData.description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", seoData.description);
      }
    }
  }, [seoData]);
};

// Structured Data Component
export const StructuredData = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    script.id = "structured-data";

    // Remove existing structured data
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
};

// Blog Post Structured Data
export const BlogPostStructuredData = ({ post, author }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.content.substring(0, 160),
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

  return <StructuredData data={structuredData} />;
};

// Website Structured Data
export const WebsiteStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ModernBlog",
    description:
      "Professional blogging platform for writers and content creators",
    url: window.location.origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${window.location.origin}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "ModernBlog",
      logo: {
        "@type": "ImageObject",
        url: `${window.location.origin}/logo.png`,
      },
    },
  };

  return <StructuredData data={structuredData} />;
};

export default SEOHead;
