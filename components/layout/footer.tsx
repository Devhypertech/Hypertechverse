export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
                © {new Date().getFullYear()} Hypertech Verse. All rights reserved.
            </div>
        </footer>
    );
}
