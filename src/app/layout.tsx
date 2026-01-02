import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

export const metadata: Metadata = {
  title: { default: "Hypertech Verse", template: "%s | Hypertech Verse" },
  description: "Digital marketing website for Hypertech Verse.",
  icons: {
    icon: [
      { url: "/fav_iconhtv.png?v=2", type: "image/png" },
      { url: "/fav_iconhtv.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/fav_iconhtv.png?v=2", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/fav_iconhtv.png?v=2",
    apple: "/fav_iconhtv.png?v=2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="9M26ExhFTmIv34KYSs9AQ3tJBkDH_YKDWgkePTcs3zA" />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TEVGD26JKP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TEVGD26JKP');
          `}
        </Script>

        {/* Preload Alkaline Caps font with high priority */}
        <link
          rel="preconnect"
          href="https://fonts.cdnfonts.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.cdnfonts.com/css/alkaline-caps"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/alkaline-caps"
          media="all"
        />
      </head>
      <body className="min-h-dvh">
        <Header />
        {children}
        <Footer />
        {/* Tawk.to Script */}
        <Script
          id="tawkto-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/663d1b479a809f19fb2f2787/1htfb54no';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
