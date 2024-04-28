import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@src/theme/providers";
import {
  seo,
  siteDescription,
  siteTitle,
  siteUrl,
  socialMedia,
} from "@src/config";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harrison Jyrwa",
  description:
    "assionate mobile & WEB developer crafting innovative apps for Android, iOS, & the WEB, committed to exceptional user experiences through cutting-edge tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={sora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <head>
      <title>Harrison Jyrwa</title>
      <meta
        name="description"
        content="Harrison Jyrwa is a Full Stack Developer based in India. He specializes in building websites, applications, and everything in between."
      />
      veer
      <meta property="og:url" content="https://jyrwaboys.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Harrison Jyrwa" />
      <meta
        property="og:description"
        content="Harrison Jyrwa is a Full Stack Developer based in India. He specializes in building websites, applications, and everything in between."
      />
      <meta
        property="og:image"
        content="https://jyrwaboys.vercel.app/seo/og.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jyrwaboys.vercel.app" />
      <meta property="twitter:url" content="https://jyrwaboys.vercel.app/" />
      <meta name="twitter:title" content="Harrison Jyrwa" />
      <meta
        name="twitter:description"
        content="Harrison Jyrwa is a Full Stack Developer based in India. He specializes in building websites, applications, and everything in between."
      />
      <meta
        name="twitter:image"
        content="https://jyrwaboys.vercel.app/seo/og.png"
      />
      <meta name="robots" content="noindex,nofollow" />
      {/* google site verification */}
      <meta
        name="google-site-verification"
        content="xuV-K38QQwcUNaJhxNyxtDInrbi66eo2z44IoVhZeY4"
      />
    </head>
  );
};
