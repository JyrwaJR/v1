'use client';
import React, { useEffect, useRef } from 'react';
import { Text, textVariants } from '@components/text';
import { useAnimation, useInView, motion } from 'framer-motion';
import Fade from '@components/fade';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  const aboutMeText1 =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque id accusantium laudantium dignissimos, officia eum, minima rerum praesentium totam molestiae necessitatibus. Asperiores tempora excepturi blanditiis debitis unde fuga architecto nam.';
  const aboutMeText2 =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque id accusantium laudantium dignissimos, officia eum, minima rerum praesentium totam molestiae necessitatibus. Asperiores tempora excepturi blanditiis debitis unde fuga architecto nam.';
  const texts = [aboutMeText1, aboutMeText2];
  return (
    <section id="about">
      <div className="grid h-full grid-cols-12 items-center justify-center justify-items-center gap-5 space-x-5 px-5 py-14 md:gap-0">
        <div className="col-span-full h-full sm:col-span-full lg:order-2 lg:col-span-6">
          <div className="aspect-square h-full w-full">
            <Fade>
              <div className="relative h-full  max-h-[534px] w-full max-w-[524px]">
                <motion.img
                  src={'/seo/head-shot.jpg'}
                  className="aspect-square h-auto rounded-xl object-center"
                  alt="hero image"
                />
                <motion.div
                  initial={{ opacity: 0.4 }}
                  whileHover={{
                    opacity: 0,
                    transition: { duration: 0.5 }
                  }}
                  className="absolute inset-0 rounded-xl bg-green "
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="mt:mt-0 col-span-full mt-5 h-full content-center space-y-5 sm:col-span-full lg:order-1 lg:col-span-6">
          <div className="text-center text-lightestSlate">
            <Fade>
              <Text size="displayL" className="font-thin">
                About{' '}
                <span
                  className={textVariants({
                    weight: 'extraBold'
                  })}
                >
                  Me
                </span>
              </Text>
            </Fade>
          </div>
          <div className="flex flex-col space-y-5 text-justify">
            {texts.map((text, index) => (
              <Fade key={index} delay={index * 0.2}>
                <Text size="p2" className="text-center text-lightSlate">
                  {text}
                </Text>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
