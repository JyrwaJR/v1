import React from 'react';
import { Text } from '../text';
import { experienceList, ExperienceType } from '../../contents/my-experience';
import { ExperienceCard } from './experience-card';
import Fade from '../fade';

const Experience = () => {
  return (
    <section id="experience" className="h-full">
      <div className="container h-full text-primary-foreground">
        <div className="flex w-full flex-col items-center justify-center space-y-10  py-16">
          <Fade className="w-full text-center">
            <Text
              size="displayL"
              className="text-nowrap font-thin text-lightestSlate"
            >
              Where I have{' '}
              <span className="font-extrabold capitalize text-green">
                worked
              </span>
            </Text>
          </Fade>
          {/* <div className="flex-1 space-y-8"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
