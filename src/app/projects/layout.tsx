'use client';
import { Nav } from '@src/components';
import React, { useEffect } from 'react';

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);
  return (
    <div className="md:container">
      <Nav isLoaded={isLoaded} />
      {children}
    </div>
  );
};

export default ProjectLayout;
