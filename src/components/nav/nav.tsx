"use client";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Text, textVariants } from "../text";
import { DownloadIcon } from "@radix-ui/react-icons";
import Fade from "../fade";
import MobileNav from "./mobile-nav";
import { MenuIcon } from "lucide-react";
import { Squash as Hamburger } from "hamburger-react";
export type NavLinksTypes = {
  url: string;
  name: string;
};
export const NavLinks: NavLinksTypes[] = [
  {
    url: "/",
    name: "About Me",
  },
  {
    url: "/#skill",
    name: "Skills",
  },
  {
    url: "/",
    name: "Experience",
  },

  {
    url: "/",
    name: "Projects",
  },
  {
    url: "/",
    name: "Contact Me",
  },

  {
    url: "./resume.pdf",
    name: "Resume",
  },
];
const Nav = ({
  isLoaded,
  isMobileOpen,
  onClick,
}: {
  isLoaded: boolean;
  isMobileOpen: boolean;
  onClick: () => void;
}) => {
  if (!isLoaded) {
    return;
  }
  return (
    <>
      <div className="p-5 backdrop-blur-sm w-full z-50 fixed top-0 left-0 right-0 ">
        <div className="flex items-center h-full justify-between">
          <Fade startY={-25}>
            <Link
              className={textVariants({
                size: "button1",
                weight: "extraBold",
                className: "text-green hover:text-slate",
              })}
              href={"/"}
              target="_self"
            >
              JyrwaBoy
            </Link>
          </Fade>

          <DesktopNav />
          <div className="lg:hidden">
            <Hamburger
              rounded
              label="show menu"
              size={28}
              easing="ease-in"
              distance="md"
              direction="right"
              duration={0.5}
              color="#64ffda"
              toggled={isMobileOpen}
              toggle={onClick}
            />
          </div>
        </div>
      </div>
      <MobileNav onClick={onClick} isOpen={isMobileOpen} />
    </>
  );
};

export default Nav;

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex">
      <div className="flex space-x-7 justify-center items-center">
        {NavLinks.map((link, index) => (
          <Fade
            startY={link.name === "Resume" ? -50 : -25}
            delay={index * 0.5 + 0.1}
            key={index}
          >
            {link.name === "Resume" ? (
              <Link
                className={buttonVariants({
                  variant: "outline",
                })}
                href={link.url}
                target="_blank"
              >
                {link.name} <DownloadIcon className="ml-2 h-4 w-4" />
              </Link>
            ) : (
              <Link href={link.url} target="_self">
                <Text
                  className={textVariants({
                    size: "p3",
                    weight: "semiBold",
                    className: "text-slate hover:text-green",
                  })}
                >
                  0{index + 1}. {link.name}
                </Text>
              </Link>
            )}
          </Fade>
        ))}
      </div>
    </div>
  );
};
