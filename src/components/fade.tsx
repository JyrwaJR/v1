'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { cn } from '@src/lib/utils';

type FadeProps = {
  children: React.ReactNode;
  delay?: number;
  startY?: number;
  startX?: number;
  fadeIn?: boolean;
  type?: 'just' | 'tween' | 'spring' | 'inertia' | 'keyframes';
  className?: string;
};

const Fade = ({
  children,
  delay,
  startX,
  startY,
  type = 'tween',
  fadeIn = true,
  className
}: FadeProps) => {
  const delayTime = delay === 0 ? 0.5 * 0.1 : delay ? delay * 0.5 : 0.2;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5
  });
  const style = cn('inherit', className);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={style}>
      <motion.div
        className="inherit"
        variants={{
          hidden: {
            opacity: fadeIn ? 0 : 1,
            x: startX || 0,
            y: startY || 50
          },
          visible: {
            opacity: fadeIn ? 1 : 0,
            x: 0,
            y: 0,
            transition: {
              y: {
                type: type,
                delay: delayTime ? delayTime : 0.5,
                duration: 0.5,
                damping: 0,
                easings: {
                  type: 'easeInOut',
                  stiffness: 100
                }
              },
              x: {
                type: type,
                delay: delayTime ? delayTime : 0.5,
                duration: 0.5,
                damping: 0,
                easings: {
                  type: 'easeInOut',
                  stiffness: 100
                }
              },
              opacity: {
                type: type,
                duration: 0.5,
                delay: delayTime ? delayTime : 0.5,
                damping: 300,
                easings: {
                  type: 'easeInOut',
                  stiffness: 100
                }
              }
            }
          }
        }}
        transition={{ staggerChildren: 0.5 }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Fade;
