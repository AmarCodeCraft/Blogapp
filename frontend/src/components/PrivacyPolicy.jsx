import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
          Privacy Policy
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
              At ModernBlog, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our blog platform and services.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <p className="text-green-800 font-medium">
                Our Privacy Commitment
              </p>
              <p className="text-green-700 text-sm mt-2">
                We believe in transparency, user control, and minimal data
                collection. We never sell your personal information and only
                collect what's necessary to provide our services.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              2. Information We Collect
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3">
                  Information You Provide
                </h4>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>
                    • <strong>Account Information:</strong> Name, email address,
                    username
                  </li>
                  <li>
                    • <strong>Profile Data:</strong> Bio, profile picture,
                    social links
                  </li>
                  <li>
                    • <strong>Content:</strong> Blog posts, comments, and other
                    user-generated content
                  </li>
                  <li>
                    • <strong>Communications:</strong> Messages sent through our
                    contact forms
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-3">
                  Automatically Collected Information
                </h4>
                <ul className="text-purple-700 text-sm space-y-2">
                  <li>
                    • <strong>Usage Data:</strong> Pages visited, time spent,
                    interactions
                  </li>
                  <li>
                    • <strong>Device Information:</strong> Browser type,
                    operating system, IP address
                  </li>
                  <li>
                    • <strong>Analytics:</strong> Performance metrics and user
                    behavior patterns
                  </li>
                  <li>
                    • <strong>Cookies:</strong> Session data and preferences
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Service Provision
                  </h4>
                  <p className="text-slate-600 text-sm">
                    To provide, maintain, and improve our blog platform and user
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Communication
                  </h4>
                  <p className="text-slate-600 text-sm">
                    To respond to your inquiries, provide customer support, and
                    send important updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Platform Security
                  </h4>
                  <p className="text-slate-600 text-sm">
                    To detect, prevent, and address technical issues, fraud, and
                    security vulnerabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Analytics & Improvement
                  </h4>
                  <p className="text-slate-600 text-sm">
                    To understand usage patterns and improve our services
                    (anonymized data only).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              4. Information Sharing and Disclosure
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-800 font-medium">
                We DO NOT sell your personal information
              </p>
              <p className="text-red-700 text-sm mt-1">
                Your data is never sold to third parties for marketing or
                advertising purposes.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              We may share your information only in the following limited
              circumstances:
            </p>

            <ul className="text-slate-600 leading-relaxed space-y-3 ml-6">
              <li>
                <strong>• With Your Consent:</strong> When you explicitly
                authorize us to share specific information
              </li>
              <li>
                <strong>• Service Providers:</strong> With trusted third-party
                services that help us operate our platform (hosting, analytics,
                email delivery)
              </li>
              <li>
                <strong>• Legal Requirements:</strong> When required by law,
                court order, or to protect our legal rights
              </li>
              <li>
                <strong>• Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets (with notice to users)
              </li>
              <li>
                <strong>• Safety & Security:</strong> To protect the safety of
                our users or prevent illegal activities
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              5. Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Technical Safeguards
                </h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• Secure data storage and backup systems</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Access controls and authentication</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Organizational Measures
                </h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Employee privacy training</li>
                  <li>• Limited access on need-to-know basis</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular privacy impact assessments</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              6. Your Privacy Rights
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Access & Portability
                </h4>
                <p className="text-blue-700 text-sm">
                  Request a copy of your personal data in a machine-readable
                  format.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">
                  Correction & Update
                </h4>
                <p className="text-green-700 text-sm">
                  Update or correct inaccurate information in your account
                  settings.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-2">Deletion</h4>
                <p className="text-amber-700 text-sm">
                  Request deletion of your account and associated personal data.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Opt-Out</h4>
                <p className="text-purple-700 text-sm">
                  Unsubscribe from marketing communications at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              7. Cookies and Tracking
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your
              experience:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 rounded-lg">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-800">
                      Cookie Type
                    </th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-800">
                      Purpose
                    </th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-800">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      Essential
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      Authentication, security, basic functionality
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      Session
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      Analytics
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      Usage statistics, performance monitoring
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      2 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      Preferences
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      User settings, theme preferences
                    </td>
                    <td className="border border-slate-300 px-4 py-2 text-slate-600">
                      1 year
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              8. Data Retention
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain your personal information only as long as necessary for
              the purposes outlined in this policy:
            </p>
            <ul className="text-slate-600 leading-relaxed space-y-2 ml-6">
              <li>
                • <strong>Account Data:</strong> Until you delete your account
                or request deletion
              </li>
              <li>
                • <strong>Content:</strong> As long as it remains published on
                our platform
              </li>
              <li>
                • <strong>Analytics Data:</strong> Aggregated and anonymized
                after 2 years
              </li>
              <li>
                • <strong>Communication Records:</strong> 3 years for customer
                support purposes
              </li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              9. Children's Privacy
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <p className="text-amber-800 font-medium">Age Restriction</p>
              <p className="text-amber-700 text-sm mt-2">
                ModernBlog is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you become aware that a child has provided us with
                personal information, please contact us immediately.
              </p>
            </div>
          </section>

          {/* International Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-slate-600 leading-relaxed">
              ModernBlog is based in [Your Country]. If you are accessing our
              services from outside [Your Country], please be aware that your
              information may be transferred to, stored, and processed in [Your
              Country] where our servers are located and our central database is
              operated.
            </p>
          </section>

          {/* Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              11. Policy Updates
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by:
            </p>
            <ul className="text-slate-600 leading-relaxed space-y-1 ml-6">
              <li>• Posting the updated policy on this page</li>
              <li>• Sending an email notification to registered users</li>
              <li>• Displaying a prominent notice on our platform</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              12. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <ul className="text-slate-700 space-y-2">
                <li>
                  <strong>Privacy Officer:</strong> privacy@modernblog.com
                </li>
                <li>
                  <strong>General Contact:</strong> hello@modernblog.com
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
              to="/terms-of-service"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>View Terms of Service</span>
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

export default PrivacyPolicy;
