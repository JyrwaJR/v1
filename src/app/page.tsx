"use client";
import About from "@src/components/about/about";
import Contact from "@src/components/contact/contact";
import Experience from "@src/components/experience/experience";
import Footer from "@src/components/footer/footer";
import Hero from "@src/components/hero/hero";
import Nav from "@src/components/nav/nav";
import Projects from "@src/components/projects/projects";
import Skills from "@src/components/skills/skills";
import { ScrollArea } from "@src/components/ui/scroll-area";
import React, { useEffect } from "react";

const Page = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ScrollArea>
      <Nav isLoaded={isMounted} />
      <div className="md:container">
        <Hero />
        <Skills />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </ScrollArea>
  );
};

export default Page;
