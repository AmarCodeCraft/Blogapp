import React from "react";
import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
          Terms of Service
        </h1>
        <p className="text-lg text-slate-600">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to ModernBlog ("we," "our," or "us"). These Terms of
              Service ("Terms") govern your use of our blog platform and
              services located at modernblog.com (the "Service") operated by
              ModernBlog.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using our Service, you agree to be bound by these
              Terms. If you disagree with any part of these terms, then you may
              not access the Service.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By creating an account or using ModernBlog, you acknowledge that
              you have read, understood, and agree to be bound by these Terms of
              Service and our Privacy Policy.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes via email or through our
              platform. Continued use of the Service after such modifications
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* User Accounts */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              3. User Accounts
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-blue-800 font-medium">
                Account Responsibilities
              </p>
            </div>
            <ul className="text-slate-600 leading-relaxed space-y-2 ml-6">
              <li>
                • You are responsible for maintaining the confidentiality of
                your account credentials
              </li>
              <li>
                • You must provide accurate and complete information when
                creating your account
              </li>
              <li>
                • You are responsible for all activities that occur under your
                account
              </li>
              <li>
                • You must notify us immediately of any unauthorized use of your
                account
              </li>
              <li>
                • You may not share your account with others or create multiple
                accounts
              </li>
            </ul>
          </section>

          {/* Content Guidelines */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              4. Content Guidelines
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When using ModernBlog, you agree to create and share content that:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">
                  ✓ Allowed Content
                </h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Original, creative writing</li>
                  <li>• Respectful discussions and opinions</li>
                  <li>• Educational and informative posts</li>
                  <li>• Personal experiences and stories</li>
                  <li>• Professional insights and expertise</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">
                  ✗ Prohibited Content
                </h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Spam or promotional content</li>
                  <li>• Hate speech or harassment</li>
                  <li>• Copyrighted material without permission</li>
                  <li>• False or misleading information</li>
                  <li>• Adult or inappropriate content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              5. Intellectual Property Rights
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Your Content:</strong> You retain all rights to the
              content you create and publish on ModernBlog. By posting content,
              you grant us a non-exclusive, royalty-free license to display,
              distribute, and promote your content on our platform.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Our Platform:</strong> The ModernBlog platform, including
              its design, functionality, and underlying technology, is owned by
              us and protected by intellectual property laws.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>Copyright Infringement:</strong> We respect intellectual
              property rights and will respond to valid copyright infringement
              claims in accordance with applicable laws.
            </p>
          </section>

          {/* Privacy and Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              6. Privacy and Data Protection
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of
              personal information is governed by our Privacy Policy, which is
              incorporated into these Terms by reference.
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-700">
                <strong>Key Points:</strong> We collect minimal data necessary
                for platform functionality, never sell your personal
                information, and provide you with control over your data.
              </p>
              <Link
                to="/privacy-policy"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read our full Privacy Policy →
              </Link>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              7. Account Termination
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Your Right to Terminate:</strong> You may delete your
              account at any time through your account settings. Upon deletion,
              your personal data will be removed in accordance with our Privacy
              Policy.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>Our Right to Terminate:</strong> We reserve the right to
              suspend or terminate accounts that violate these Terms, engage in
              prohibited activities, or for any other reason at our discretion,
              with or without notice.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              8. Disclaimers and Limitations
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
              <p className="text-amber-800 font-medium">
                Important Legal Information
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Service Availability:</strong> We strive to maintain high
              service availability but cannot guarantee uninterrupted access.
              The Service is provided "as is" without warranties of any kind.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>Limitation of Liability:</strong> To the maximum extent
              permitted by law, ModernBlog shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your
              use of the Service.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              9. Governing Law
            </h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law principles. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts in [Your
              Jurisdiction].
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              10. Contact Information
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <ul className="text-slate-700 space-y-2">
                <li>
                  <strong>Email:</strong> legal@modernblog.com
                </li>
                <li>
                  <strong>Address:</strong> 123 Creative Street, New York, NY
                  10001
                </li>
                <li>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/privacy-policy"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>View Privacy Policy</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
