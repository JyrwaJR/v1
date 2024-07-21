import React from 'react';
import { Text, textVariants } from '@components/text';
import { MySkill } from '@src/contents/my-skills';
import { SkillsCard } from '@components/skills/skillsCard';
import Fade from '@components/fade';

const Skills = () => {
  return (
    <section id="skill" className="my-4 md:my-14">
      <div className="grid grid-cols-12 items-center gap-5">
        <div className="col-span-full h-full text-center">
          <Fade className="flex flex-col gap-5">
            <Text className="text-5xl leading-10 tracking-tighter text-lightestSlate">
              Tools /{' '}
              <span
                className={textVariants({
                  weight: 'extraBold',
                  className: 'text-green'
                })}
              >
                Skills
              </span>
            </Text>
            <Text
              size={'p2'}
              weight={'thin'}
              className="pt-5 text-5xl leading-10 tracking-tighter text-lightSlate"
            >
              Here are a few technologies I’ve been working with recently
            </Text>
          </Fade>
        </div>
        {MySkill.map((skill, index) => (
          <Fade
            key={index}
            className="col-span-6 grid place-content-center  md:col-span-4 lg:col-span-3 xl:col-span-2"
            startY={50}
            delay={index * 0.5}
          >
            <SkillsCard
              name={skill.name}
              variant={skill.variant}
              iconName={skill.iconName}
            />
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Skills;
