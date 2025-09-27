export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="text-sm text-white mb-4 sm:mb-0">
                        @2025 Created By Hypertech Verse.
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-white">
                        <a href="/terms" className="underline hover:text-white/80 transition">
                            Terms & Conditions
                        </a>
                        <a href="/privacy" className="underline hover:text-white/80 transition">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
