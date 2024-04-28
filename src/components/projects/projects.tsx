import React, { useEffect } from "react";
import Fade from "../fade";
import { ShowLessOrMoreButton } from "./show-more-less-btn";
import { ProjectsCard } from "./projects-card";
import { projects } from "./my-projects";
import { Text } from "../text";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Project = () => {
  const [isShowCount, setIsShowCount] = React.useState<number>(3);
  const [isShowMore, setIsShowMore] = React.useState<boolean>(true);
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
              {projects.slice(0, isShowCount).map((item, index) => (
                <div
                  key={index}
                  className="col-span-full md:col-span-6 lg:col-span-4 "
                >
                  <Fade delay={index * 0.7}>
                    <ProjectsCard
                      projectDescription={item.projectDescription}
                      projectLink={item.projectLink}
                      projectName={item.projectName}
                      projectTechStack={item.projectTechStack}
                      githubLink={item.githubLink}
                    />
                  </Fade>
                </div>
              ))}
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
