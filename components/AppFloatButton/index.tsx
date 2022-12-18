import { FloatButton } from "antd";
import React, { FC } from "react";
import { IAppFloatButtonProps } from "./interface";

const AppFloatButton: FC<IAppFloatButtonProps> = ({
  icon,
  description,
  target,
  href,
  ...props
}) => {
  return (
    <div className="app-float-button">
      <FloatButton
        href={href}
        icon={icon}
        description={description}
        target={target}
      />
    </div>
  );
};

export default AppFloatButton;
