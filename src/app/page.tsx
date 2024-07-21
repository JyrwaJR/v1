'use client';
import {
  Nav,
  About,
  Contact,
  Footer,
  Hero,
  Projects,
  Skills
} from '@src/components';
import React, { useEffect } from 'react';

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
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Page;
