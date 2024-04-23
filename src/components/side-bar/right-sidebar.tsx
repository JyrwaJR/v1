import React from "react";
import { Text } from "../text";

const RightSideBar = () => {
  return (
    <div className="fixed top-0 z-50 bottom-0 right-0 border border-primary">
      <div className="flex h-full items-end justify-end">
        <Text size={"p1"} className="text-primary text-end h-full border">
          jyrwaboys@gmail.com
        </Text>
      </div>
    </div>
  );
};

export default RightSideBar;
