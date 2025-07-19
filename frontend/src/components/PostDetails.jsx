import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPostById, deletePost } from "../services/api";
import SEOHead, { BlogPostStructuredData } from "./SEOHead";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deletePost(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post)
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading post...</p>
        </div>
      </div>
    );

  return (
    <>
      {/* SEO for individual blog post */}
      <SEOHead
        title={`${post.title} - ModernBlog`}
        description={post.content.substring(0, 160) + "..."}
        keywords={`${post.title}, blog post, writing, ${
          post.category || "article"
        }`}
        image={post.imageUrl || "/og-image.jpg"}
        url={`/post/${post._id}`}
        type="article"
        author={post.author?.username || "ModernBlog"}
        publishedTime={post.createdAt}
        modifiedTime={post.updatedAt || post.createdAt}
        section={post.category}
        tags={post.tags || []}
      />
      <BlogPostStructuredData
        post={post}
        author={post.author || { username: "ModernBlog", name: "ModernBlog" }}
      />

      <article className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {post.imageUrl && (
            <div className="relative h-96 overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          )}

          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-4 pb-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-lg">
                      {post.author}
                    </p>
                    <p className="text-slate-500">
                      Published on{" "}
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none mb-8">
              <div className="text-slate-700 leading-relaxed text-lg whitespace-pre-wrap">
                {post.content}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-slate-200">
              <Link
                to={`/edit/${post._id}`}
                className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span>Edit Post</span>
              </Link>
              <button
                onClick={handleDelete}
                className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span>Delete Post</span>
              </button>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-800 font-medium py-3 px-6 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default PostDetails;
