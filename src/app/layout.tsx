import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harrison Jyrwa",
  description: "Portfolio of Harrison Jyrwa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      {children}
    </html>
  );
}
