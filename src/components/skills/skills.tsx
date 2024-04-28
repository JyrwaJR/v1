import React from "react";
import { Text, textVariants } from "@components/text";
import { MySkill } from "@components/skills/my-skills";
import { SkillsCard } from "@components/skills/skillsCard";
import Fade from "@components/fade";

const Skills = () => {
  return (
    <div className="my-4 md:my-14">
      <div className="grid grid-cols-12 content-center items-stretch justify-items-center">
        <div className="col-span-full my-5 h-full text-center">
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
            <Fade startY={50} delay={index * 0.5}>
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
