'use client';
import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Text, textVariants } from '@components/text';
import { buttonVariants } from '@components/ui/button';
import Fade from '../fade';
import { NavLinks } from '@components/nav/nav-links';
import Icons from '../icon';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};
export const MobileNav = ({ isOpen, onClick }: Props) => {
  const height = 'calc(100vh - 5rem)';
  return (
    <AnimatePresence>
      <motion.div
        exit={'exit'}
        initial={'hidden'}
        animate={isOpen ? 'visible' : 'hidden'}
        variants={{
          hidden: {
            top: 0,
            right: 1,
            zIndex: -50,
            width: '00%',
            height: height,
            display: 'none',
            overflow: 'hidden',
            transition: {
              duration: 0.5
            },
            type: 'tween'
          },
          visible: {
            right: 0,
            top: 0,
            zIndex: 50,
            width: '70%',
            height: height,
            display: 'flex',
            transition: {
              duration: 0.5
            },
            overflow: 'hidden',
            scrollBehavior: 'unset',
            type: 'tween'
          }
        }}
        className={`fixed mt-[5rem] items-center justify-center bg-background bg-center`}
      >
        <motion.div
          animate={isOpen ? 'visible' : 'hidden'}
          initial={'hidden'}
          variants={{
            hidden: {
              // opacity: 0,
              x: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: {
                duration: 0.5
              },
              type: 'tween'
            },
            visible: {
              x: 0,
              // opacity: 1,
              display: 'flex',
              flexDirection: 'column',
              transition: {
                duration: 0.5
              },
              type: 'tween'
            }
          }}
          className="items-center justify-center space-y-10"
        >
          {NavLinks.map((link, index) => (
            <Fade key={index} delay={index}>
              <div>
                {link.name === 'Resume' ? (
                  <Link
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'lg'
                    })}
                    href={link.url}
                    target="_blank"
                  >
                    {link.name}{' '}
                    <Icons name="download" className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <Link href={link.url} target="_self">
                    <Text
                      className={textVariants({
                        size: 'p3',
                        weight: 'semiBold',
                        className: 'text-slate hover:text-green'
                      })}
                    >
                      0{index + 1}. {link.name}
                    </Text>
                  </Link>
                )}
              </div>
            </Fade>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={'hidden'}
        animate={isOpen ? 'visible' : 'hidden'}
        variants={{
          hidden: {
            height: height,
            display: 'none',
            opacity: 0,
            zIndex: -40,
            overflow: 'hidden',
            transition: {
              duration: 0.5
            },
            type: 'tween'
          },
          visible: {
            height: height,
            display: 'block',
            opacity: 1,
            zIndex: 40,
            transition: {
              duration: 0.5
            },
            type: 'tween'
          }
        }}
        onClick={onClick}
        className="fixed bottom-0 left-0 right-0 top-0 mt-[5rem]  w-full backdrop-blur-sm "
      />
    </AnimatePresence>
  );
};
