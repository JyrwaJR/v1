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
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={seo.imageUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={"https://x.com/jyrwaboys?s=09"} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={seo.imageUrl} />
    </head>
  );
};
