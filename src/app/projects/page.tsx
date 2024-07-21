import Icons from '@src/components/icon';
import { Text } from '@src/components/text';
import { buttonVariants } from '@src/components/ui/button';
import { workedProjects } from '@src/contents/my-projects';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div className="mt-[100px] flex flex-col content-start justify-center space-y-5 px-5 text-center md:px-0 ">
      <div className="mb-5 flex flex-col items-center justify-center space-y-5">
        <div>
          <Text className="text-6xl text-lightestSlate" weight={'extraBold'}>
            Projects
          </Text>
        </div>
        <div>
          <Text size={'p2'} className="text-green">
            List of things I’ve worked on
          </Text>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center text-start ">
        <div className="mb-10 grid w-full grid-cols-12 space-x-5 font-bold capitalize text-lightSlate">
          <div className="col-span-3 md:col-span-1">
            <Text>year</Text>
          </div>
          <div className="col-span-6 md:col-span-3 ">
            <Text weight={'semiBold'}>Title</Text>
          </div>
          <div className="col-span-2 hidden md:block ">
            <Text>Made at</Text>
          </div>
          <div className="col-span-3 hidden md:block">
            <Text>build with</Text>
          </div>
          <div className="col-span-3 md:col-span-2">
            <Text>link</Text>
          </div>
        </div>
        {workedProjects.map((project, index) => (
          <div key={index} className="w-full py-5">
            <div className="grid w-full grid-cols-12 space-x-5 text-lightestSlate">
              <div className="col-span-3 flex  items-center md:col-span-1">
                <Text
                  weight={'semiBold'}
                  size={'p2'}
                  className="line-clamp-1 text-green"
                >
                  {project.year}
                </Text>
              </div>
              <div className="col-span-6 flex items-center  md:col-span-3">
                <Text weight={'semiBold'} className="line-clamp-2">
                  {project.title}
                </Text>
              </div>
              <div className="col-span-2 hidden items-center text-slate  md:flex">
                <Text weight={'default'} size={'p2'} className="line-clamp-2">
                  {project.madeAt}
                </Text>
              </div>
              <div className="col-span-3 hidden items-center  md:flex">
                <Text
                  weight={'default'}
                  className="text-md line-clamp-2 flex items-center text-sm  text-slate"
                >
                  {project.tech}
                </Text>
              </div>
              <div className="col-span-3 flex items-center md:col-span-2">
                <div className="flex space-x-2">
                  {project.github && (
                    <Link
                      target="__blank"
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'icon',
                        className: 'text-slate hover:text-green'
                      })}
                      href={project.github}
                    >
                      <Icons name="github" className="h-6 w-6" />
                    </Link>
                  )}

                  <div>
                    {project.link && (
                      <Link
                        target="__blank"
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'icon',
                          className: 'text-slate hover:text-green'
                        })}
                        href={project.link}
                      >
                        <Icons className="h-6 w-6 " />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
