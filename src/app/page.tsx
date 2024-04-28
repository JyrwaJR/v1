"use client";

import {
  Nav,
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@src/components";
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

const Page = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Nav isLoaded={isMounted} />
      <div className="sm:container">
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Page;
