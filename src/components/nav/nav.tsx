"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { textVariants } from "../text";
import Fade from "../fade";
import { Squash as Hamburger } from "hamburger-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { DesktopNav, MobileNav } from "@components/nav";
const Nav = ({ isLoaded }: { isLoaded: boolean }) => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const onClick = useCallback(() => {
    setIsMobileOpen(!isMobileOpen);
  }, [isMobileOpen]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when nav opens
    } else {
      document.body.style.overflow = ""; // Enable scrolling when nav closes
    }
  }, [isMobileOpen]);

  if (!isLoaded) return null;

  return (
    <React.Fragment>
      <motion.nav
        style={{
          padding: "1.25rem",
          width: "100%",
          zIndex: 50,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: {
            y: "-100%",
            transition: {
              duration: 0.3,
            },
          },
          visible: {
            y: 0,
            transition: {
              duration: 0.3,
            },
          },
        }}
        className={isMobileOpen ? "bg-background" : "backdrop-blur-sm"}
      >
        <div className="flex h-full items-center justify-between">
          <Fade startY={-25}>
            <Link
              className={textVariants({
                size: "button1",
                weight: "extraBold",
                className: "tracking-wider text-green hover:text-slate",
              })}
              href={"/"}
              target="_self"
            >
              JyrwaBoy
            </Link>
          </Fade>

          <DesktopNav />
          <div className="lg:hidden">
            <Fade startY={-25}>
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
            </Fade>
          </div>
        </div>
      </motion.nav>
      <MobileNav onClick={onClick} isOpen={isMobileOpen} />
    </React.Fragment>
  );
};

export default Nav;
