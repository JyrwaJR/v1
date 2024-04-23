"use client";
import React, { useEffect, useRef } from "react";
import { Text, textVariants } from "../text";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";
import Fade from "../fade";

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
    <div className="grid grid-cols-2 justify-center content-center items-center justify-items-center space-x-10 space-y-10 py-14">
      <div className="col-span-2 md:col-span-1">
        <div className="aspect-square w-full h-full">
          <Fade>
            <Image
              src={"/head-shot.jpg"}
              width={524}
              height={524}
              className="aspect-square object-cover rounded-xl opacity-80"
              alt="hero image not display"
            />
          </Fade>
        </div>
      </div>
      <div className="col-span-full md:col-span-1 content-center space-y-5  h-full">
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
        <div className="flex flex-col space-y-5 indent-10 text-start">
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
