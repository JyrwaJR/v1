import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import GridGuide from "@src/components/grid";
import Nav from "@src/components/nav/nav";
import Footer from "@src/components/footer/footer";
import Skills from "@src/components/skills/skills";
import Experience from "@src/components/experience/experience";
import Hero from "@src/components/hero/hero";
import Head from "next/head";
import About from "@src/components/about/about";
import Contact from "@src/components/contact/contact";
import MobileNav from "@src/components/nav/mobile-nav";
import RightSideBar from "@src/components/side-bar/right-sidebar";
import { ThemeProvider } from "@src/theme/providers";
import { ScrollArea } from "@src/components/ui/scroll-area";

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
