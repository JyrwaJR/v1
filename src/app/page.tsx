"use client";
import About from "@src/components/about/about";
import Contact from "@src/components/contact/contact";
import Experience from "@src/components/experience/experience";
import Footer from "@src/components/footer/footer";
import GridGuide from "@src/components/grid";
import Hero from "@src/components/hero/hero";
import Nav from "@src/components/nav/nav";
import Skills from "@src/components/skills/skills";
import { cn } from "@src/lib/utils";
import { ThemeProvider } from "@src/theme/providers";
import { Sora } from "next/font/google";
import React, { useEffect } from "react";

const Page = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Nav isLoaded={isMounted} />
      <div className="md:container">
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Page;
