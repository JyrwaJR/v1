import React from "react";
import { Text, textVariants } from "../text";
import { MySkill } from "./my-skills";
import { SkillsCard } from "./skillsCard";
import Fade from "../fade";

const Skills = () => {
  return (
    <div className="my-4 md:my-14">
      <div className="justify-items-center items-stretch content-center grid grid-cols-12">
        <div className="text-center h-full my-5 col-span-full">
          <Fade className="flex flex-col space-y-3">
            <Text className="text-5xl leading-10 tracking-tighter text-lightestSlate">
              Tools /{" "}
              <span
                className={textVariants({
                  weight: "extraBold",
                  className: "text-green",
                })}
              >
                Skills
              </span>
            </Text>
            <Text
              size={"p2"}
              weight={"thin"}
              className="text-5xl leading-10 tracking-tighter text-lightSlate"
            >
              Here are a few technologies I’ve been working with recently
            </Text>
          </Fade>
        </div>
        {MySkill.map((skill, index) => (
          <div
            key={index}
            className="col-span-6 my-5 md:col-span-4 lg:col-span-2"
          >
            <Fade startY={50} delay={index === 0 ? index : index * 0.5}>
              <SkillsCard
                name={skill.name}
                variant={skill.variant}
                iconName={skill.iconName}
              />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
