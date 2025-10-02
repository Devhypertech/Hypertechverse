import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Corrected import for Twitter (using FaTwitter)

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Footer Menu in the Center */}
                <div className="flex justify-center py-14 space-x-8 mb-6">
                    <a href="/portfolio" className="text-white hover:text-[#FFD350] transition">Portfolio</a>
                    <a href="/services" className="text-white hover:text-[#FFD350] transition">Services</a>
                    <a href="/about" className="text-white hover:text-[#FFD350] transition">About</a>
                    <a href="/contact" className="text-white hover:text-[#FFD350] transition">Contact</a>
                </div>

                {/* Three Columns Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                    {/* Left Column with Get Started Button */}
                    <div className="text-center md:text-left">
                        <a
                            href="/contact"
                            className="inline-block bg-[#FDA5D5] text-black py-2 px-6 rounded-lg font-semibold hover:bg-[#FFD350] transition"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Center Column with Logo */}
                    <div className="flex justify-center py-6">
                        <Image
                            src="/footerlogo.png"
                            alt="Hypertech Verse Logo"
                            width={300}
                            height={240}
                            className="object-contain"
                        />
                    </div>

                    {/* Right Column with Social Media Icons */}
                    <div className="flex justify-end space-x-4">
                        <a href="https://facebook.com" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-[#FDA5D5] hover:text-[#FFD350] transition">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 text-sm">
                    <div className="text-white mb-4 sm:mb-0">
                        @2025 Created By Hypertech Verse.
                    </div>
                    <div className="flex justify-end space-x-6">
                        <a href="#" className="hover:text-[#FFD350] transition">
                            Terms & Conditions
                        </a>
                        <a href="/privacy" className="hover:text-[#FFD350] transition">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
