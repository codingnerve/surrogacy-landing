import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Surrogacy Program | Ethical Path to Parenthood",
  description: "Join our ethical and compassionate surrogacy program. Trusted worldwide for providing professional guidance and care to intended parents.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9NFTQRR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P9NFTQRR');
          `}
        </Script>
        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11060344649"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11060344649');
            gtag('config', 'AW-11060344649/HYE6CN-Z5IwcEMnu_Zkp', {
              'phone_conversion_number': '7303301239'
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

