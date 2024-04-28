import { ExternalLink, FolderIcon, Github } from "lucide-react";
import React from "react";
import { Text } from "../text";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import Fade from "../fade";
const ProjectList: ProjectsCardProps[] = [
  {
    projectName: "Andrew",
    projectDescription:
      "fifth girl high probably except badly primitive try no skin difficult large fierce taught grandmother own flew beginning shape unhappy party lady ago dear",
    projectTechStack: "Tech Stack",
    projectLink: "http://luvmema.ve/rejnujgo",
    githubLink: "https://project1.com",
  },
  {
    projectName: "Virgie",
    projectDescription:
      "fifth girl high probably except badly primitive try no skin difficult large fierce taught grandmother own flew beginning shape unhappy party lady ago dear",
    projectTechStack: "Tech Stack",
    projectLink: "http://tuez.cm/perfanras",
    githubLink: "https://project1.com",
  },
  {
    projectName: "Ian",
    projectDescription:
      "fifth girl high probably except badly primitive try no skin difficult large fierce taught grandmother own flew beginning shape unhappy party lady ago dear",
    projectTechStack: "Tech Stack",
    projectLink: "http://veg.kg/doc",
  },
];
const Project = () => {
  return (
    <div className="mx-10   ">
      <div className="grid grid-cols-12 gap-3 md:gap-5">
        {ProjectList.map((item, index) => (
          <div
            key={index}
            className="col-span-full md:col-span-6 lg:col-span-4 2xl:col-span-3"
          >
            <Fade delay={index}>
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
      </div>
    </div>
  );
};

export default Project;
type ProjectsCardProps = {
  projectName: string;
  projectDescription: string;
  projectTechStack: string;
  projectLink: string;
  githubLink?: string;
};
const ProjectsCard = ({
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
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="group h-full min-h-full w-full rounded-md bg-navy px-4 shadow-sm hover:text-green md:px-0"
    >
      <div className="w-full rounded-sm  px-7 py-8 ">
        <div className="flex h-full flex-col items-start justify-between space-y-6">
          <div className="flex w-full items-center  justify-between ">
            <div className="">
              <FolderIcon size={40} className="text-green" />
            </div>
            <div className="flex h-full items-center space-x-2 text-slate">
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
                    <Github size={22} />
                  </Link>
                )}
              </div>
              <div>
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
                  <ExternalLink size={22} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between space-y-4 ">
            <div className="">
              <Text
                size={"h4"}
                className="text-lightSlate group-hover:text-green "
                weight={"bold"}
              >
                {projectName}
              </Text>
            </div>
            <div className="">
              <Text className="text-sm text-slate">{projectDescription}</Text>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Text size={"p3"} className="text-slate hover:text-green">
              {projectTechStack}
            </Text>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
