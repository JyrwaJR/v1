import React from "react";

const GridGuide = () => {
  return (
    <React.Fragment>
      <div className="zIndex-1000 fixed inset-0 overflow-hidden opacity-5">
        <div className="h-screen md:container">
          <div className="grid h-full grid-cols-4 items-center justify-center gap-5 md:grid-cols-12">
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
            <div className="h-full  grid-cols-1 bg-red-500" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GridGuide;
