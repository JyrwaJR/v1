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
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["200", "300", "400", "600", "700"],
});
const Page = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const ref = React.useRef(null);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const bodyStyle = cn(sora.className, isOpen ? "overflow-hidden" : "");
  return (
    <>
      <body ref={ref} className={bodyStyle}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav isLoaded={isMounted} onClick={onClick} isMobileOpen={isOpen} />
          <div className="scrollGroup overflow-hidden">
            <div className="md:container">
              <Hero />
              <Skills />
              <Experience />
              <About />
              <Contact />
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </>
  );
};

export default Page;
