"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Privacy Policy
        </h1>

        <div
          className="prose prose-invert prose-lg max-w-none"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <p className="text-white/90 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              1. Introduction
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Hypertech Verse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              2. Information We Collect
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
              <li>Personal data such as name, email address, phone number, and mailing address</li>
              <li>Business information including company name and job title</li>
              <li>Technical data such as IP address, browser type, and device information</li>
              <li>Usage data including pages visited, time spent on pages, and navigation patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              3. How We Use Your Information
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              5. Data Security
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              6. Your Rights
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              8. Third-Party Links
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              9. Children's Privacy
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              11. Contact Us
            </h2>
            <p className="text-white/90 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-white/90 mb-2">
                <strong>Hypertech Verse</strong>
              </p>
              <p className="text-white/90 mb-2">
                Email: <a href="mailto:info@hypertechverse.com" className="text-[#FFD350] hover:underline">info@hypertechverse.com</a>
              </p>
              <p className="text-white/90">
                Website: <a href="https://hypertechverse.com" className="text-[#FFD350] hover:underline">https://hypertechverse.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

