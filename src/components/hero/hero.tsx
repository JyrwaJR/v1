"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button, buttonVariants } from "../ui/button";
import Icons from "../icon";
import { Text, textVariants } from "../text";
import Fade from "../fade";
import Nav from "../nav/nav";
import MobileNav from "../nav/mobile-nav";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { email, socialMedia } from "@src/config";
import { motion } from "framer-motion";
type SocialLinksType = {
  url: string;
  name: string;
};

const Zero = () => {
  return (
    <div className="">
      <Text size={"h6"} className="text-brandRed-50">
        {" "}
        Hello
        <br />
      </Text>
    </div>
  );
};
const One = () => {
  return (
    <div className="">
      <Text size={"displayL"} className="text-lightSlate">
        {`I'am`}{" "}
        <span
          className={textVariants({
            weight: "extraBold",
            className: "text-green",
          })}
        >
          Harrison Jyrwa.
        </span>
        <br />
      </Text>
    </div>
  );
};
const Two = () => {
  return (
    <Text size={"displayL"} className="tracking-wide" weight={"extraBold"}>
      {" "}
      Software{" "}
      <span
        className={textVariants({
          weight: "extraBold",
        })}
      >
        Developer
      </span>
      <br />
    </Text>
  );
};
const Three = () => {
  return (
    <div>
      <Text size={"displayM"} className="text-lightestSlate">
        {" "}
        Based In Shillong,{" "}
        <span
          className={textVariants({
            weight: "extraBold",
          })}
        >
          India.
        </span>
        <br />
      </Text>
    </div>
  );
};
const Four = () => {
  return (
    <div className="w-[95%] px-1 md:w-8/12">
      <Text size={"p2"} className="text-slate">
        {" "}
        Passionate mobile &{" "}
        <span
          className={textVariants({
            weight: "extraBold",
            className: "text-green",
          })}
        >
          WEB
        </span>{" "}
        developer crafting innovative apps for Android, iOS, & the{" "}
        <span
          className={textVariants({
            weight: "extraBold",
            className: "uppercase text-green",
          })}
        >
          web
        </span>
        , committed to exceptional user experiences through cutting-edge tech.
      </Text>
    </div>
  );
};
const Five = () => {
  return (
    <div className="py-4">
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "px-24 py-7",
        })}
        href={`mailto:${email}`}
      >
        {`Let's`} Connect <ArrowTopRightIcon className="ml-1" />
      </Link>
    </div>
  );
};
const items = [Zero, One, Two, Three, Four, Five];

const Hero = () => {
  return (
    <>
      <div className="h-screen px-5 md:container md:px-0">
        <div className="flex h-full flex-col items-start justify-center space-y-2">
          {items.map((Item, index) => (
            <Fade key={index} type="just" delay={index}>
              <Item />
            </Fade>
          ))}
          <SocialMenuBar />
        </div>
      </div>
    </>
  );
};

export default Hero;

export const SocialMenuBar = () => {
  return (
    <div className="fixed bottom-0 z-50 hidden md:block">
      <div className="flex space-x-5">
        {socialMedia.map((link, index) => (
          <Fade key={index} delay={index}>
            <motion.div
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Link
                href={link.url}
                target="_blank"
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                  className:
                    "border-1 flex items-center justify-center rounded-full border-slate text-center font-bold  text-slate hover:scale-110 hover:border-green  hover:text-green",
                })}
              >
                <Icons name={link.name} className="text-inherit" />
              </Link>
            </motion.div>
          </Fade>
        ))}
      </div>
    </div>
  );
};
