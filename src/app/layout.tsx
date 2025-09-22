import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

export const metadata: Metadata = {
  title: { default: "Hypertech Verse", template: "%s | Hypertech Verse" },
  description: "Digital marketing website for Hypertech Verse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
