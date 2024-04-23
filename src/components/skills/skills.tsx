import React from "react";
import { Text } from "../text";
import { MySkill } from "./my-skills";
import { SkillsCard } from "./skillsCard";
import Fade from "../fade";

const Skills = () => {
  return (
    <div className="my-4 md:my-14">
      <div className="justify-items-center items-stretch content-center grid grid-cols-12">
        <div className="text-center h-full my-5 col-span-full">
          <Fade>
            <Text
              weight={"bold"}
              className="text-5xl leading-10 tracking-tighter text-lightestSlate"
            >
              My Skills
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
