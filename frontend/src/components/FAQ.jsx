import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I create a new blog post?",
      answer:
        "To create a new blog post, you need to be logged in to your account. Click the 'New Post' button in the header, fill out the title and content fields, and click 'Publish' to share your post with the community.",
    },
    {
      question: "Can I edit my posts after publishing?",
      answer:
        "Yes! You can edit your published posts at any time. Go to your profile page, find the post you want to edit, and click the 'Edit' button. Make your changes and save them.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "To delete your account, go to your Profile page, click on the 'Account Settings' tab, and scroll down to the 'Danger Zone' section. Please note that account deletion is permanent and cannot be undone.",
    },
    {
      question: "What file formats are supported for images?",
      answer:
        "We support common image formats including JPEG, PNG, GIF, and WebP. Images should be under 5MB in size for optimal performance.",
    },
    {
      question: "How can I increase engagement on my posts?",
      answer:
        "To increase engagement, write compelling headlines, use relevant images, engage with comments, share your posts on social media, and consistently publish quality content. Check our Writing Guide for more detailed tips.",
    },
    {
      question: "Is there a limit to how many posts I can publish?",
      answer:
        "No, there's no limit to the number of posts you can publish. We encourage active participation and regular content creation from our community members.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "If you encounter inappropriate content, please contact us through our Contact page with details about the post or user. We take community guidelines seriously and will investigate all reports.",
    },
    {
      question: "Can I use HTML in my blog posts?",
      answer:
        "Currently, our editor supports rich text formatting including bold, italic, lists, and links. Advanced HTML features may be added in future updates based on user feedback.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "On the login page, click 'Forgot password?' and enter your email address. You'll receive a password reset link via email. Follow the instructions in the email to set a new password.",
    },
    {
      question: "Are my posts automatically saved while writing?",
      answer:
        "Currently, posts are only saved when you click the 'Publish' or 'Save Draft' button. We recommend writing longer posts in a text editor first as a backup.",
    },
    {
      question: "How do I change my display name or email?",
      answer:
        "Go to your Profile page and click on 'Account Settings'. From there, you can update your profile information. Some changes may require email verification.",
    },
    {
      question: "Can I schedule posts for future publication?",
      answer:
        "Post scheduling is not currently available, but it's on our roadmap for future updates. Currently, all posts are published immediately when you click 'Publish'.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about using ModernBlog
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-slate-400"
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
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search FAQs..."
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Account", "Posts", "Technical", "Community"].map(
              (category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-full text-slate-600 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-200"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* FAQ List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <div key={index} className="transition-all duration-200">
                <button
                  className="w-full px-8 py-6 text-left hover:bg-purple-50 focus:outline-none focus:bg-purple-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-800 pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`transform transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                      <p className="text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-purple-100 mb-6">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 inline-block"
            >
              Contact Support
            </a>
            <a
              href="/help"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 inline-block"
            >
              Help Center
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/40">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
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
            <h3 className="font-semibold text-slate-800 mb-2">Writing Guide</h3>
            <p className="text-slate-600 text-sm mb-4">
              Learn how to write compelling blog posts
            </p>
            <a
              href="/writing-guide"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Read Guide →
            </a>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/40">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
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
            <h3 className="font-semibold text-slate-800 mb-2">Help Center</h3>
            <p className="text-slate-600 text-sm mb-4">
              Comprehensive help documentation
            </p>
            <a
              href="/help"
              className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
            >
              Get Help →
            </a>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/40">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
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
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Contact Us</h3>
            <p className="text-slate-600 text-sm mb-4">
              Get in touch with our team
            </p>
            <a
              href="/contact"
              className="text-orange-600 hover:text-orange-700 font-medium text-sm"
            >
              Contact →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
