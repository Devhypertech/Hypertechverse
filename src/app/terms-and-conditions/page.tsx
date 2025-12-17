"use client";
import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#1d1d1d] text-[#fff9f1] pt-24 sm:pt-28 md:pt-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8"
          style={{ fontFamily: "Recursive, sans-serif" }}
        >
          Terms and Conditions
        </h1>

        <div
          className="prose prose-invert prose-lg max-w-none"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <p className="text-[#fff9f1]/90 mb-6">
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
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              Welcome to Hypertech Verse. These Terms and Conditions ("Terms") govern your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              2. Services
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              Hypertech Verse provides digital marketing, web design, branding, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              3. User Obligations
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              By using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-[#fff9f1]/90 space-y-2 ml-4">
              <li>Provide accurate and complete information when requested</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to any part of our services</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              4. Intellectual Property
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              All content, designs, logos, and materials on our website are the property of Hypertech Verse or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              5. Project Terms
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              When you engage our services:
            </p>
            <ul className="list-disc list-inside text-[#fff9f1]/90 space-y-2 ml-4">
              <li>Project scope, timeline, and pricing will be outlined in a separate agreement</li>
              <li>Payment terms will be specified in your project agreement</li>
              <li>We retain the right to use completed work in our portfolio unless otherwise agreed</li>
              <li>Revisions and changes are subject to the terms of your specific project agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              6. Payment Terms
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              Payment terms will be specified in your project agreement. Generally:
            </p>
            <ul className="list-disc list-inside text-[#fff9f1]/90 space-y-2 ml-4">
              <li>Deposits may be required before work begins</li>
              <li>Final payment is typically due upon project completion</li>
              <li>Late payments may incur additional fees</li>
              <li>Refunds are handled on a case-by-case basis as outlined in your agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              7. Limitation of Liability
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              To the fullest extent permitted by law, Hypertech Verse shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              8. Indemnification
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              You agree to indemnify and hold harmless Hypertech Verse, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              9. Termination
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              10. Third-Party Services
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              Our services may integrate with or link to third-party services. We are not responsible for the content, policies, or practices of third-party services. Your interactions with third-party services are solely between you and the third party.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              11. Changes to Terms
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              12. Governing Law
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Hypertech Verse operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD350]"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              13. Contact Us
            </h2>
            <p className="text-[#fff9f1]/90 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-[#fff9f1]/10 p-4 rounded-lg">
              <p className="text-[#fff9f1]/90 mb-2">
                <strong>Hypertech Verse</strong>
              </p>
              <p className="text-[#fff9f1]/90 mb-2">
                Email: <a href="mailto:info@hypertechverse.com" className="text-[#FFD350] hover:underline">info@hypertechverse.com</a>
              </p>
              <p className="text-[#fff9f1]/90">
                Website: <a href="https://hypertechverse.com" className="text-[#FFD350] hover:underline">https://hypertechverse.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

