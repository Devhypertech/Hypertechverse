"use client";
import React, { useState } from "react";
import ScrollAnimation from "../../components/ScrollAnimationSimple";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#EA7BBF] text-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-12 md:py-16">
            <h1
              className="leading-[.95] font-black uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Get In Touch
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-black">
          <div className="relative h-[56px] sm:h-[68px] overflow-hidden">
            <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee-x">
              <RibbonText />
              <RibbonText />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <ScrollAnimation animation="fadeInLeft" delay={150}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontFamily: "Recursive, sans-serif" }}
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EA7BBF] focus:border-transparent transition"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EA7BBF] focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EA7BBF] focus:border-transparent transition"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#EA7BBF] focus:border-transparent transition"
                    >
                      <option value="" className="bg-black">Select a subject</option>
                      <option value="general" className="bg-black">General Inquiry</option>
                      <option value="services" className="bg-black">Services</option>
                      <option value="support" className="bg-black">Support</option>
                      <option value="partnership" className="bg-black">Partnership</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#EA7BBF] focus:border-transparent transition resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400">
                      <p style={{ fontFamily: "Poppins, sans-serif" }}>
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400">
                      <p style={{ fontFamily: "Poppins, sans-serif" }}>
                        Something went wrong. Please try again later.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#FFD350] text-black px-6 py-3 sm:py-4 font-bold text-base sm:text-lg shadow-[0_6px_0_rgba(0,0,0,0.25)] hover:shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Details */}
            <ScrollAnimation animation="fadeInRight" delay={250}>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    Contact Information
                  </h2>
                  <p
                    className="text-base sm:text-lg text-white/80 mb-8"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Reach out to us through any of these channels. We&apos;re here to help!
                  </p>
                </div>

                {/* Call Us */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EA7BBF] flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold mb-3"
                        style={{ fontFamily: "Recursive, sans-serif" }}
                      >
                        CALL US
                      </h3>
                      <div className="space-y-2">
                        <a
                          href="tel:3259999372"
                          className="block text-base sm:text-lg text-white/90 hover:text-[#FFD350] transition-colors"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          325-999-9372
                        </a>
                        <a
                          href="tel:8328104443"
                          className="block text-base sm:text-lg text-white/90 hover:text-[#FFD350] transition-colors"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          832-810-4443
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EA7BBF] flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold mb-3"
                        style={{ fontFamily: "Recursive, sans-serif" }}
                      >
                        EMAIL
                      </h3>
                      <a
                        href="mailto:info@hypertechverse.com"
                        className="block text-base sm:text-lg text-white/90 hover:text-[#FFD350] transition-colors"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        info@hypertechverse.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EA7BBF] flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold mb-3"
                        style={{ fontFamily: "Recursive, sans-serif" }}
                      >
                        LOCATION
                      </h3>
                      <a
                        href="https://maps.google.com/?q=15819+Winter+Cypress+Wy,+Cypress,+TX+77429"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-base sm:text-lg text-white/90 hover:text-[#FFD350] transition-colors"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        15819 Winter Cypress Wy,
                        <br />
                        Cypress, TX 77429
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
      </div>
      </section>
    </main>
  );
}

function RibbonText() {
  return (
    <div className="flex items-center">
      <span
        className="text-white font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-wider whitespace-nowrap inline-block px-8"
        style={{ fontFamily: "Recursive, sans-serif" }}
      >
        GET IN TOUCH | HYPERTECH VERSE | CONTACT US
      </span>
    </div>
  );
}
