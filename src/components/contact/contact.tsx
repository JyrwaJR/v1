import React from "react";
import { Text } from "../text";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import Fade from "../fade";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { email } from "@src/config";
const One = () => {
  return (
    <div>
      <Text size={"displayL"} weight={"extraBold"}>
        {`Let's`} talk for
      </Text>
    </div>
  );
};
const Two = () => {
  return (
    <div>
      <Text size={"displayL"} weight={"extraBold"}>
        Something <span className={""}>special</span>
      </Text>
    </div>
  );
};
const Three = () => {
  return (
    <div className="flex text-slate justify-center">
      <div className="w-7/12">
        <Text size={"p2"}>
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
          size: "lg",
          className: "w-full px-24 py-7",
        })}
        href={`"mailto:${email}"`}
      >
        Get In Touch <ArrowTopRightIcon className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const items = [One, Two, Three, Four];
const Contact = () => {
  return (
    <div className="py-16">
      <div className="h-full text-center text-lightestSlate place-items-center flex items-center justify-items-center space-y-5 flex-col">
        {items.map((Item, index) => (
          <Fade key={index} delay={index * 0.5}>
            <Item />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Contact;
