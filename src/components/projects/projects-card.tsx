import { Text } from "@components/text";
import { buttonVariants } from "@components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Icons from "@components/icon";

export type ProjectsCardProps = {
  projectName: string;
  projectDescription: string;
  projectTechStack: string;
  projectLink?: string;
  githubLink?: string;
};
export const ProjectsCard = ({
  projectName,
  projectDescription,
  projectTechStack,
  projectLink,
  githubLink,
}: ProjectsCardProps) => {
  return (
    <motion.div
      whileHover={{
        zIndex: 40,
        y: -5,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="group flex aspect-square h-full max-h-[324px] min-h-full w-full min-w-full max-w-[304] flex-col justify-between rounded-lg bg-lightNavy px-7 py-8 shadow-sm hover:text-green md:mx-0"
    >
      <div className="flex flex-col items-start justify-stretch space-y-6 rounded-sm ">
        <div className=" flex w-full items-center justify-between ">
          <div>
            <Icons name="folder" className="h-9 w-9 text-green" />
          </div>
          <div className="flex items-center space-x-2 text-slate">
            <div>
              {githubLink && (
                <Link
                  target="_blank"
                  href={githubLink}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                    className:
                      "text-slate hover:bg-transparent hover:text-green",
                  })}
                >
                  <Icons name="github" className="h-6 w-6" />
                </Link>
              )}
            </div>
            <div>
              {projectLink && (
                <Link
                  target="_blank"
                  href={projectLink}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                    className:
                      "text-slate hover:bg-transparent hover:text-green",
                  })}
                >
                  <Icons className="h-6 w-6" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between space-y-4">
          <div>
            <Text
              size={"h4"}
              className="line-clamp-2 tracking-wide text-lightSlate group-hover:text-green"
              weight={"bold"}
            >
              {projectName}
            </Text>
          </div>
          <div>
            <Text className="line-clamp-6  text-sm text-slate sm:line-clamp-5 md:line-clamp-4 xl:line-clamp-5">
              {projectDescription}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start">
        <Text
          size={"p3"}
          className="line-clamp-[0.5] tracking-wide text-slate group-hover:text-green"
        >
          {projectTechStack}
        </Text>
      </div>
    </motion.div>
  );
};
