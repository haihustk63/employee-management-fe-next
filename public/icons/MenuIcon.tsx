import React from "react";

const MenuIcon = ({ color, bgColor }: any) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
        style={{ fill: `var(--color-primary-${color})` }}
      />
    </svg>
  );
};

export default MenuIcon;
