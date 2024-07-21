import React from 'react';
import { Text } from '../text';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import Fade from '../fade';
import { email } from '@src/config';
import Icons from '../icon';
const One = () => {
  return (
    <div>
      <Text size={'displayL'} weight={'extraBold'}>
        {`Let's`} talk for
      </Text>
    </div>
  );
};
const Two = () => {
  return (
    <div>
      <Text size={'displayL'} weight={'extraBold'}>
        Something <span className={''}>special</span>
      </Text>
    </div>
  );
};
const Three = () => {
  return (
    <div className="flex justify-center text-slate">
      <div className="w-[80%] md:w-7/12">
        <Text size={'p2'}>
          While {`I'm`} not actively seeking new opportunities at the moment,
          feel free to reach out anytime. Whether you have a question or simply
          want to say hello, {`I'll`} do my best to respond.
        </Text>
      </div>
    </div>
  );
};
const Four = () => {
  return (
    <div>
      <Link
        className={buttonVariants({
          size: 'lg',
          className: 'w-full px-24 py-7'
        })}
        href={`"mailto:${email}"`}
      >
        Get In Touch <Icons name="arrowupright" className="ml-2" />
      </Link>
    </div>
  );
};

const items = [One, Two, Three, Four];
const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="flex h-full flex-col place-items-center items-center justify-items-center space-y-5 text-center text-lightestSlate">
        {items.map((Item, index) => (
          <Fade key={index} delay={index}>
            <Item />
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Contact;
