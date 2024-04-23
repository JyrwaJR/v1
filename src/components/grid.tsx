import React from "react";

const GridGuide = () => {
  return (
    <React.Fragment>
      <div className="fixed zIndex-1000 inset-0 opacity-5 overflow-hidden">
        <div className="h-screen md:container">
          <div className="grid grid-cols-12 h-full gap-5 justify-center items-center">
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
            <div className="grid-cols-1  h-full bg-red-500" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GridGuide;
