import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostById, createPost, updatePost } from "../services/api";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const fetchPost = async () => {
        try {
          const response = await getPostById(id);
          const { title, content, author } = response.data;
          setTitle(title);
          setContent(content);
          setAuthor(author);
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (id) {
        await updatePost(id, formData);
      } else {
        await createPost(formData);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
            <svg
              className="w-8 h-8"
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
            <span>{id ? "Edit Post" : "Create New Post"}</span>
          </h1>
          <p className="text-blue-100 mt-2">
            {id ? "Update your story" : "Share your thoughts with the world"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="space-y-6">
            <div>
              <label
                className="block text-slate-700 text-sm font-semibold mb-3"
                htmlFor="title"
              >
                Post Title
              </label>
              <input
                className="w-full px-4 py-3 text-slate-800 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                id="title"
                type="text"
                placeholder="Enter an engaging title for your post..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block text-slate-700 text-sm font-semibold mb-3"
                htmlFor="author"
              >
                Author Name
              </label>
              <input
                className="w-full px-4 py-3 text-slate-800 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                id="author"
                type="text"
                placeholder="Your name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block text-slate-700 text-sm font-semibold mb-3"
                htmlFor="image"
              >
                Featured Image
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 text-slate-800 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <p className="text-slate-500 text-sm mt-2">
                Upload an image to make your post more engaging (optional)
              </p>
            </div>

            <div>
              <label
                className="block text-slate-700 text-sm font-semibold mb-3"
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                className="w-full px-4 py-3 text-slate-800 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 h-80 resize-none"
                id="content"
                placeholder="Write your story here... Share your thoughts, experiences, or ideas with your readers."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-6 py-3 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200"
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
              <span>Cancel</span>
            </Link>
            <button
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              type="submit"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{id ? "Update Post" : "Publish Post"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
