import React, { useEffect, useRef } from "react";
import Fade from "@components/fade";
import { ShowLessOrMoreButton } from "./show-more-less-btn";
import { ProjectsCard } from "@components/projects/projects-card";
import { projects } from "@components/projects/my-projects";
import { Text } from "@components/text";
import Link from "next/link";
import { buttonVariants } from "@components/ui/button";
import { AnimatePresence, LayoutGroup, motion, useInView } from "framer-motion";

const Project = () => {
  const [isShowCount, setIsShowCount] = React.useState<number>(3);
  const [isShowMore, setIsShowMore] = React.useState<boolean>(true);
  const ref = useRef(null);
  const onClickShowMoreOrLess = () => {
    if (!isShowMore) {
      setIsShowCount(3);
    } else {
      setIsShowCount(isShowCount + 3);
    }
  };
  useEffect(() => {
    if (isShowCount >= projects.length) {
      setIsShowMore(false);
    } else {
      setIsShowMore(true);
    }
  }, [isShowCount]);

  return (
    <>
      <div className="h-full ">
        <div className="h-full ">
          <div className="flex aspect-auto w-full flex-col items-center justify-center space-y-10 py-16  ">
            <Fade className="w-full text-center">
              <Text
                size="displayL"
                weight={"extraBold"}
                className="text-nowrap text-lightestSlate"
              >
                Projects
              </Text>
              <div>
                <Link
                  href="/projects"
                  className={buttonVariants({
                    variant: "link",
                    className: "text-slate hover:text-green",
                  })}
                >
                  View list of projects I have worked on ?
                </Link>
              </div>
            </Fade>
            <div className="grid grid-cols-12 gap-5 ">
              <AnimatePresence>
                {projects.slice(0, isShowCount).map((item, index) => (
                  <Fade
                    className="col-span-full md:col-span-6 lg:col-span-4"
                    key={index}
                    delay={index > 3 ? index - 3 : 0}
                  >
                    <motion.div
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: index * 0.2,
                          staggerChildren: 0.5,
                        },
                      }}
                    >
                      <ProjectsCard
                        projectName={item.projectName}
                        projectDescription={item.projectDescription}
                        projectTechStack={item.projectTechStack}
                        githubLink={item.githubLink}
                        projectLink={item.projectLink}
                      />
                    </motion.div>
                  </Fade>
                ))}
              </AnimatePresence>
              <div className="col-span-full">
                <Fade delay={1}>
                  {projects.length > 3 && (
                    <ShowLessOrMoreButton
                      onClick={onClickShowMoreOrLess}
                      isShowMore={isShowMore}
                      size="lg"
                    />
                  )}
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
