"use client";
import About from "@src/components/about/about";
import Contact from "@src/components/contact/contact";
import Experience from "@src/components/experience/experience";
import Footer from "@src/components/footer/footer";
import Hero from "@src/components/hero/hero";
import Nav from "@src/components/nav/nav";
import Skills from "@src/components/skills/skills";
// import HamburgerMenu from "@src/components/ham-burger-menu";
import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";
import { ThemeProvider } from "@src/theme/providers";
import { Sora } from "next/font/google";
import React, { useEffect } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const style = cn();
  return (
    <>
      <body className={isOpen ? "overflow-hidden" : ""}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav isLoaded={isMounted} onClick={onClick} isMobileOpen={isOpen} />
          <div className="overflow-hidden">
            <div className="md:container">
              <Hero />
              <Skills />
            </div>
            <Experience />
            <div className="md:container">
              <About />
              <Contact />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </>
  );
};

export default Page;
