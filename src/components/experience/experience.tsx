import React from "react";
import { Text } from "../text";
import { experienceList, ExperienceType } from "./my-experience";
import { ExperienceCard } from "./experience-card";
import Fade from "../fade";

const Experience = () => {
  return (
    <div className="h-full">
      <div className="container h-full text-primary-foreground">
        <div className="flex w-full flex-col items-center justify-center space-y-10  py-16">
          <Fade className="w-full ">
            <Text
              size="displayL"
              className="text-nowrap font-thin text-lightestSlate"
            >
              My <span className="font-extrabold">Experience</span>
            </Text>
          </Fade>
          <div className="flex-1 space-y-8">
            {experienceList.map((experience: ExperienceType, index: number) => (
              <Fade key={index} delay={index * 0.2}>
                <ExperienceCard
                  companyName={experience.companyName}
                  date={experience.date}
                  description={experience.description}
                  linkToCompany={experience.linkToCompany}
                  logoLink={experience.logoLink}
                  index={index % 2 === 0}
                />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
