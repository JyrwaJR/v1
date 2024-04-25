"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@src/lib/utils";

type FadeProps = {
  children: React.ReactNode;
  delay?: number;
  startY?: number;
  startX?: number;
  fadeIn?: boolean;
  type?: "just" | "tween" | "spring" | "inertia" | "keyframes";
  className?: string;
  props?: any;
};

const Fade = ({
  children,
  delay,
  startX,
  startY,
  type = "tween",
  fadeIn = true,
  className,
  props,
}: FadeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
  });
  const style = cn("inherit", className);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        {...props}
        className={style}
        variants={{
          hidden: {
            opacity: fadeIn ? 0 : 1,
            x: startX || 0,
            y: startY || 50,
          },
          visible: {
            opacity: fadeIn ? 1 : 0,
            x: 0,
            y: 0,
            transition: {
              y: {
                type: type,
                delay: delay ? delay : 0.5,
                duration: 0.5,
                damping: 0,
                easings: {
                  type: "easeInOut",
                  stiffness: 100,
                },
              },
              x: {
                type: type,
                delay: delay ? delay : 0.5,
                duration: 0.5,
                damping: 0,
                easings: {
                  type: "easeInOut",
                  stiffness: 100,
                },
              },
              opacity: {
                type: type,
                duration: 0.5,
                delay: delay ? delay : 0.5,
                damping: 300,
                easings: {
                  type: "easeInOut",
                  stiffness: 100,
                },
              },
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Fade;
