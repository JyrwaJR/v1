"use client";
import React, { useEffect, useRef } from "react";
import { Text, textVariants } from "@components/text";
import { useAnimation, useInView, motion } from "framer-motion";
import Fade from "@components/fade";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  const aboutMeText1 =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque id accusantium laudantium dignissimos, officia eum, minima rerum praesentium totam molestiae necessitatibus. Asperiores tempora excepturi blanditiis debitis unde fuga architecto nam.";
  const aboutMeText2 =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque id accusantium laudantium dignissimos, officia eum, minima rerum praesentium totam molestiae necessitatibus. Asperiores tempora excepturi blanditiis debitis unde fuga architecto nam.";
  const texts = [aboutMeText1, aboutMeText2];
  return (
    <div className="grid grid-cols-2 content-center items-center justify-center justify-items-center space-x-10 space-y-10 py-14">
      <div className="col-span-2 md:order-2  md:col-span-1">
        <div className="aspect-square h-full w-full">
          <Fade>
            <div className="relative max-h-[534px] max-w-[524px]">
              <motion.img
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                src={"/seo/head-shot.jpg"}
                className="aspect-square h-auto rounded-xl object-center opacity-80"
                alt="hero image"
              />
              <motion.div
                initial={{ opacity: 0.4 }}
                whileHover={{
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
                className="absolute inset-0 rounded-xl bg-green "
              />
            </div>
          </Fade>
        </div>
      </div>
      <div className="col-span-full h-full  content-start space-y-5 md:order-1  md:col-span-1">
        <div className="text-center text-lightestSlate">
          <Fade>
            <Text size="displayL" className="font-thin">
              About{" "}
              <span
                className={textVariants({
                  weight: "extraBold",
                })}
              >
                Me
              </span>
            </Text>
          </Fade>
        </div>
        <div className="flex flex-col space-y-5 text-start indent-10">
          {texts.map((text, index) => (
            <Fade key={index} delay={index * 0.2}>
              <Text size="p2" className="text-lightSlate">
                {text}
              </Text>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
