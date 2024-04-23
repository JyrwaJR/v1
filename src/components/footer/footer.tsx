import Link from "next/link";
import React from "react";
import { Text, textVariants } from "../text";
import { socialMedia } from "@src/config";
const Footer = () => {
  return (
    <div className="h-[100px]">
      <div className="flex w-full items-center justify-center h-full">
        <div>
          <Text size={"p2"} className="text-slate">
            Design and build by{" "}
            <Link
              target="_blank"
              href={socialMedia[0].url}
              className="font-semibold text-green tracking-wider"
            >
              JyrwaBoy
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
