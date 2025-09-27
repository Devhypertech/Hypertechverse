import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
    return (
        <section className="bg-black py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    {/* Phone visual */}
                    <div className="mb-8">
                        <Image
                            src="/telephone.png"
                            alt="Orange retro rotary phone"
                            width={800}
                            height={600}
                            className="h-100 w-auto object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <h2 className="text-5xl font-extrabold text-pink-200">
                            Get in touch
                        </h2>
                        <p className="text-lg text-pink-300">
                            I&apos;ll get back to you within 24 hrs
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
