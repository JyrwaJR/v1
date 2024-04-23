import { cn } from "@src/lib/utils";
import React from "react";
type Props = {
  className?: string;
};
const NextJsIcon = ({ className }: Props) => {
  const style = cn("fill-current w-14 h-14", className);
  return (
    <svg
      width="57"
      height="56"
      viewBox="0 0 57 56"
      className={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_196_515)">
        <mask
          id="mask0_196_515"
          style={{ maskType: "alpha" }} // string has no properties in common with type properties<string | number,string & {}>
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="57"
          height="56"
          className="text-green"
        >
          <path
            d="M28.4399 56C43.9039 56 56.4399 43.464 56.4399 28C56.4399 12.536 43.9039 0 28.4399 0C12.976 0 0.439941 12.536 0.439941 28C0.439941 43.464 12.976 56 28.4399 56Z"
            className={"text-green"}
          />
        </mask>
        <g mask="url(#mask0_196_515)">
          <path
            d="M28.44 55.0667C43.3885 55.0667 55.5066 42.9485 55.5066 28C55.5066 13.0515 43.3885 0.93335 28.44 0.93335C13.4915 0.93335 1.37329 13.0515 1.37329 28C1.37329 42.9485 13.4915 55.0667 28.44 55.0667Z"
            stroke="white"
            stroke-width="6"
            className="text-background"
          />
          <path
            d="M46.9536 49.0063L21.9508 16.8H17.24V39.1907H21.0087V21.5861L43.9952 51.2852C45.0325 50.5911 46.0206 49.8292 46.9536 49.0063Z"
            //fill="url(#paint0_linear_196_515)"
            className="text-green"
          />
          <path
            d="M39.9511 16.8H36.2178V39.2H39.9511V16.8Z"
            className="text-green"
            //fill="url(#paint1_linear_196_515)"
          />
        </g>
      </g>
      <defs className="text-green">
        <linearGradient
          id="paint0_linear_196_515"
          x1="34.3511"
          y1="36.2445"
          x2="45.3955"
          y2="49.9334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_196_515"
          x1="38.0844"
          y1="16.8"
          x2="38.0219"
          y2="33.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_196_515">
          <rect
            width="56"
            height="56"
            fill="white"
            transform="translate(0.439941)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NextJsIcon;
