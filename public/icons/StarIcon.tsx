import React from "react";

const StarIcon = ({ color, bgColor }: any) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      id="magicoon-Filled"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-icon"
    >
      <defs></defs>
      <title>star</title>
      <g id="star-Filled">
        <path
          id="star-Filled-2"
          data-name="star-Filled"
          d="M20.934,12.13,17.82,15.122l.735,4.221a1.824,1.824,0,0,1-.726,1.792,1.872,1.872,0,0,1-1.973.152L12,19.29l-3.856,2a1.869,1.869,0,0,1-1.973-.152,1.824,1.824,0,0,1-.726-1.792l.735-4.221L3.066,12.13a1.82,1.82,0,0,1-.477-1.881A1.845,1.845,0,0,1,4.1,8.986l4.309-.617,1.926-3.845a1.871,1.871,0,0,1,3.336,0l1.926,3.845,4.309.617a1.845,1.845,0,0,1,1.508,1.263A1.82,1.82,0,0,1,20.934,12.13Z"
          style={{ fill: `var(--color-primary-${color})` }}
        />
      </g>
    </svg>
  );
};

export default StarIcon;
