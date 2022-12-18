import React from "react";

const WorkOnComputerIcon = ({ color }: any) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 256 170"
      xmlSpace="preserve"
      className="svg-icon"
    >
      <path
        style={{ fill: `var(--color-primary-${color})` }}
        d="M95.3,2.3c17.9,0,32.4,14.5,32.4,32.4S113.2,67,95.3,67S63,52.5,63,34.7S77.5,2.3,95.3,2.3z M254,147.9h-23.3
   c4.9-1.4,9.1-4.6,12-8.9c4-6.2,4.6-13.8,1.6-20.5l-24.8-55.5l-11.3-4.3l15.2-52.1l-14.9-4.3l-32.2,110.6l14.9,4.3l13.5-46.3l5.4,2
   l22.7,50.7c1.3,2.8,1,5.9-0.7,8.5c-1.7,2.6-4.4,4.1-7.5,4.1H191v11.8h-31.5c-0.3-11.1-9-19.7-19.7-19.7H96.5
   c0,0-19.9-52.1-19.9-52.1c-4.4-10.3-12.6-17.3-24-17.3c-14.7,0-25.9,12.2-33.9,29.8C7.9,112.2,2.1,140.4,2,167.8l252-0.1V147.9z"
      />
    </svg>
  );
};

export default WorkOnComputerIcon;
