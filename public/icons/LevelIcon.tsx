import React from "react";

const LevelIcon = ({ color }: any) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 32 32"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>skill-level--advanced</title>
      <path
        d="M30,30H22V4h8Z"
        style={{ fill: `var(--color-primary-${color})` }}
      />
      <path
        d="M20,30H12V12h8Z"
        style={{ fill: `var(--color-primary-${color})` }}
      />
      <path
        d="M10,30H2V18h8Z"
        style={{ fill: `var(--color-primary-${color})` }}
      />
      <rect
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        width="32"
        height="32"
        fill="none"
      />
    </svg>
  );
};

export default LevelIcon;
