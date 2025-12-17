import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1d1d1d] text-[#fff9f1] py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Footer Menu in the Center */}
                <div className="flex flex-wrap justify-center py-14 gap-4 sm:gap-6 md:space-x-8 mb-6">
                    <a href="/portfolio" className="text-[#fff9f1] hover:text-[#FFD350] transition">Portfolio</a>
                    <a href="/services" className="text-[#fff9f1] hover:text-[#FFD350] transition">Services</a>
                    <a href="/about" className="text-[#fff9f1] hover:text-[#FFD350] transition">About</a>
                    <a href="/blogs" className="text-[#fff9f1] hover:text-[#FFD350] transition">Blogs</a>
                    <a href="/pricing" className="text-[#fff9f1] hover:text-[#FFD350] transition">Pricing</a>
                    <a href="/contact" className="text-[#fff9f1] hover:text-[#FFD350] transition">Contact</a>
                </div>

                {/* Three Columns Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                    {/* Left Column with Get Started Button */}
                    <div className="text-center md:text-left">
                        <a
                            href="/contact"
                            className="inline-block bg-[#FDA5D5] text-[#1d1d1d] py-4 px-8 rounded-lg font-semibold hover:bg-[#FFD350] transition"
                        >
                            <span style={{
                                fontSize: "24px",
                                fontWeight: "bold",

                            }}>

                                Get Started
                            </span>
                        </a>
                    </div>

                    {/* Center Column with Logo and Contact Details */}
                    <div className="flex flex-col items-center py-6">
                        <Image
                            src="/footerlogo.png"
                            alt="Hypertech Verse Logo"
                            width={300}
                            height={240}
                            className="object-contain mb-6"
                        />
                        {/* Contact Details - All in one line */}
                        <div className="flex items-center justify-center gap-3 md:gap-6 text-xs md:text-sm whitespace-nowrap overflow-x-auto py-4 md:py-6">
                            <div className="flex items-center gap-1 md:gap-2 shrink-0">
                                <span className="text-[#fff9f1]">Phone:</span>
                                <a href="tel:325-999-9372" className="text-[#fff9f1] hover:text-[#FFD350] transition">325-999-9372</a>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2 shrink-0">
                                <span className="text-[#fff9f1]">Email:</span>
                                <a href="mailto:info@hypertechverse.com" className="text-[#fff9f1] hover:text-[#FFD350] transition">info@hypertechverse.com</a>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2 shrink-0">
                                <span className="text-[#fff9f1]">Location:</span>
                                <span className="text-[#fff9f1] hover:text-[#FFD350] transition cursor-default">15819 Winter Cypress Wy, Cypress, TX 77429</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column with Social Media Icons */}
                    <div className="flex flex-wrap justify-end gap-4">
                        <a href="https://www.facebook.com/hypertechverse" target="_blank" rel="noopener noreferrer" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://x.com/hypertechverse" target="_blank" rel="noopener noreferrer" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.instagram.com/hypertechversellc/" target="_blank" rel="noopener noreferrer" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.linkedin.com/company/103623473" target="_blank" rel="noopener noreferrer" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.pinterest.com/hypertechverse/" target="_blank" rel="noopener noreferrer" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaPinterest size={24} />
                        </a>
                        <a href="https://www.youtube.com/@HypertechVerse" target="_blank" rel="noopener noreferrer" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-sm">
                    <div className="text-[#fff9f1] mb-4 sm:mb-0">
                        @2025 Hypertech Verse.
                    </div>
                    <div className="flex justify-end space-x-6">
                        <a href="/terms-and-conditions" className="hover:text-[#FFD350] transition">
                            Terms & Conditions
                        </a>
                        <a href="/privacy-policy-2/" className="hover:text-[#FFD350] transition">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
