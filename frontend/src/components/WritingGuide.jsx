import React from "react";

function WritingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Writing Guide
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Master the art of compelling blog writing with our comprehensive
            guide
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Table of Contents */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 border-b border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#getting-started"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    1. Getting Started
                  </a>
                </li>
                <li>
                  <a
                    href="#writing-basics"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    2. Writing Basics
                  </a>
                </li>
                <li>
                  <a
                    href="#structure"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    3. Blog Structure
                  </a>
                </li>
                <li>
                  <a
                    href="#engagement"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    4. Reader Engagement
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#seo"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    5. SEO Best Practices
                  </a>
                </li>
                <li>
                  <a
                    href="#editing"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    6. Editing & Proofreading
                  </a>
                </li>
                <li>
                  <a
                    href="#publishing"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    7. Publishing Tips
                  </a>
                </li>
                <li>
                  <a
                    href="#promotion"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    8. Content Promotion
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 space-y-12">
            {/* Section 1: Getting Started */}
            <section id="getting-started">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  1
                </span>
                Getting Started
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Writing a compelling blog post starts with understanding your
                  audience and having a clear purpose. Before you begin writing,
                  ask yourself:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Who is your target audience?</li>
                  <li>
                    What problem are you solving or what value are you
                    providing?
                  </li>
                  <li>
                    What action do you want readers to take after reading?
                  </li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                  <p className="text-emerald-800 font-medium">
                    💡 Pro Tip: Start with a simple outline before writing. This
                    will help you stay focused and organized.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Writing Basics */}
            <section id="writing-basics">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  2
                </span>
                Writing Basics
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-slate-800">
                  Craft a Compelling Headline
                </h3>
                <p>Your headline is the first thing readers see. Make it:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Clear and specific</li>
                  <li>Benefit-focused</li>
                  <li>Emotionally engaging</li>
                  <li>Between 6-12 words when possible</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mt-6">
                  Write an Engaging Introduction
                </h3>
                <p>Your opening paragraph should:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hook the reader immediately</li>
                  <li>Clearly state what the post is about</li>
                  <li>Promise value or a solution</li>
                  <li>Set the tone for the rest of the article</li>
                </ul>
              </div>
            </section>

            {/* Section 3: Structure */}
            <section id="structure">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  3
                </span>
                Blog Structure
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  A well-structured blog post is easier to read and more
                  engaging. Follow this proven structure:
                </p>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <ol className="list-decimal list-inside space-y-3">
                    <li>
                      <strong>Headline:</strong> Grab attention and promise
                      value
                    </li>
                    <li>
                      <strong>Introduction:</strong> Hook readers and preview
                      what's coming
                    </li>
                    <li>
                      <strong>Body Sections:</strong> Break content into
                      digestible chunks with subheadings
                    </li>
                    <li>
                      <strong>Conclusion:</strong> Summarize key points and
                      include a call-to-action
                    </li>
                  </ol>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <p className="text-blue-800 font-medium">
                    📝 Remember: Use short paragraphs (2-4 sentences) and bullet
                    points to improve readability.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Reader Engagement */}
            <section id="engagement">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  4
                </span>
                Reader Engagement
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <h3 className="text-xl font-semibold text-slate-800">
                  Make It Personal
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use "you" to address readers directly</li>
                  <li>Share personal stories and experiences</li>
                  <li>Ask questions throughout your post</li>
                  <li>Use conversational language</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mt-6">
                  Add Visual Elements
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Include relevant images or graphics</li>
                  <li>Use bullet points and numbered lists</li>
                  <li>Add quotes or callout boxes</li>
                  <li>Consider video or audio content</li>
                </ul>
              </div>
            </section>

            {/* Section 5: SEO Best Practices */}
            <section id="seo">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  5
                </span>
                SEO Best Practices
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Optimize your content for search engines without sacrificing
                  readability:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      Keyword Strategy
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Research relevant keywords</li>
                      <li>Use keywords naturally</li>
                      <li>Include keywords in headlines</li>
                      <li>Focus on long-tail keywords</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      Technical SEO
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Write compelling meta descriptions</li>
                      <li>Use descriptive URLs</li>
                      <li>Add alt text to images</li>
                      <li>Internal and external linking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Editing & Proofreading */}
            <section id="editing">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  6
                </span>
                Editing & Proofreading
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Great writing is rewriting. Follow this editing checklist:
                </p>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                    Editing Checklist
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">
                        Content Review:
                      </h4>
                      <ul className="text-yellow-700 space-y-1 text-sm">
                        <li>✓ Clear and logical flow</li>
                        <li>✓ Strong introduction and conclusion</li>
                        <li>✓ Supporting evidence and examples</li>
                        <li>✓ Consistent tone and voice</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">
                        Technical Review:
                      </h4>
                      <ul className="text-yellow-700 space-y-1 text-sm">
                        <li>✓ Grammar and spelling</li>
                        <li>✓ Sentence structure and clarity</li>
                        <li>✓ Formatting and readability</li>
                        <li>✓ Links and references</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Start Writing?
              </h2>
              <p className="text-emerald-100 mb-6">
                Apply these techniques to create compelling blog posts that
                engage and inspire your readers.
              </p>
              <a
                href="/create"
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 inline-block"
              >
                Create Your First Post
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritingGuide;
