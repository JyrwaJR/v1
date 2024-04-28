import Link from "next/link";
import Fade from "@components/fade";
import { buttonVariants } from "@components/ui/button";
import { Text, textVariants } from "@components/text";
import Icons from "@components/icon";
import { NavLinks } from "@components/nav";

export const DesktopNav = () => {
  return (
    <div className="hidden lg:flex">
      <div className="flex items-center justify-center space-x-7">
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
                {link.name} <Icons name="download" className="ml-2 h-4 w-4" />
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
                  {link.name}
                </Text>
              </Link>
            )}
          </Fade>
        ))}
      </div>
    </div>
  );
};
