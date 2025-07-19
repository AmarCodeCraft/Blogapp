import React, { useState } from "react";

function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("");

  const helpSections = [
    {
      title: "Getting Started",
      icon: "🚀",
      color: "from-blue-600 to-indigo-600",
      articles: [
        { title: "How to create your first post", readTime: "3 min" },
        { title: "Setting up your profile", readTime: "2 min" },
        { title: "Understanding the dashboard", readTime: "4 min" },
        { title: "Basic navigation guide", readTime: "2 min" },
      ],
    },
    {
      title: "Writing & Publishing",
      icon: "✍️",
      color: "from-emerald-600 to-teal-600",
      articles: [
        { title: "Writing compelling blog posts", readTime: "8 min" },
        { title: "Using the rich text editor", readTime: "5 min" },
        { title: "Adding images and media", readTime: "3 min" },
        { title: "Publishing and editing posts", readTime: "4 min" },
        { title: "SEO best practices", readTime: "6 min" },
      ],
    },
    {
      title: "Account Management",
      icon: "👤",
      color: "from-purple-600 to-pink-600",
      articles: [
        { title: "Updating your profile information", readTime: "2 min" },
        { title: "Changing your password", readTime: "2 min" },
        { title: "Email verification process", readTime: "3 min" },
        { title: "Account deletion and data", readTime: "4 min" },
        { title: "Privacy settings overview", readTime: "5 min" },
      ],
    },
    {
      title: "Community Guidelines",
      icon: "🤝",
      color: "from-orange-600 to-red-600",
      articles: [
        { title: "Community rules and guidelines", readTime: "5 min" },
        { title: "Reporting inappropriate content", readTime: "3 min" },
        { title: "Engagement best practices", readTime: "4 min" },
        { title: "Copyright and fair use", readTime: "6 min" },
      ],
    },
    {
      title: "Technical Support",
      icon: "🔧",
      color: "from-slate-600 to-slate-700",
      articles: [
        { title: "Troubleshooting common issues", readTime: "7 min" },
        { title: "Browser compatibility", readTime: "3 min" },
        { title: "Mobile app features", readTime: "4 min" },
        { title: "Data export and backup", readTime: "5 min" },
        { title: "API documentation", readTime: "10 min" },
      ],
    },
    {
      title: "Tips & Tricks",
      icon: "💡",
      color: "from-yellow-600 to-amber-600",
      articles: [
        { title: "Advanced writing techniques", readTime: "8 min" },
        { title: "Growing your readership", readTime: "6 min" },
        { title: "Keyboard shortcuts guide", readTime: "3 min" },
        { title: "Content promotion strategies", readTime: "7 min" },
      ],
    },
  ];

  const popularArticles = [
    {
      title: "How to write your first blog post",
      category: "Getting Started",
      readTime: "5 min",
      views: "12.3k",
    },
    {
      title: "SEO optimization for blog posts",
      category: "Writing",
      readTime: "8 min",
      views: "8.7k",
    },
    {
      title: "Account security best practices",
      category: "Account",
      readTime: "4 min",
      views: "6.2k",
    },
    {
      title: "Understanding community guidelines",
      category: "Community",
      readTime: "6 min",
      views: "5.1k",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Help Center
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about using ModernBlog
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-6 w-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 text-lg border border-slate-300 rounded-2xl leading-5 bg-white/80 backdrop-blur-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-lg"
              placeholder="Search help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 hover:text-indigo-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        {article.category}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {article.readTime}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {article.views}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Sections */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {helpSections.map((section, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`bg-gradient-to-r ${section.color} p-6 text-white`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a
                        href="#"
                        className="flex items-center justify-between hover:text-indigo-600 transition-colors duration-200 group"
                      >
                        <span className="text-slate-700 group-hover:text-indigo-600">
                          {article.title}
                        </span>
                        <span className="text-xs text-slate-500 ml-2">
                          {article.readTime}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a
                    href="#"
                    className={`text-sm font-medium text-transparent bg-gradient-to-r ${section.color} bg-clip-text hover:opacity-80 transition-opacity`}
                  >
                    View all articles →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Can't find what you're looking for? Our support team is here to
              help you get the most out of ModernBlog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Contact Support</span>
              </a>
              <a
                href="/faq"
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Browse FAQ</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800">150+</div>
            <div className="text-slate-600">Help Articles</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800">&lt; 2hrs</div>
            <div className="text-slate-600">Response Time</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800">50K+</div>
            <div className="text-slate-600">Happy Users</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800">4.9/5</div>
            <div className="text-slate-600">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
