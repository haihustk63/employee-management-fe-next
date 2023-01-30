import { Tag } from "antd";
import React, { FC } from "react";
import { IAppTagProps } from "./interface";

const AppTag: FC<IAppTagProps> = ({
  closable,
  closeIcon,
  color,
  icon,
  onClose,
  onClick,
  children,
}) => {
  return (
    <div className="app-tag" onClick={onClick}>
      <Tag
        style={{ backgroundColor: `var(--color-primary-${color})` }}
        closable={closable}
        closeIcon={closeIcon}
        icon={icon}
        onClose={onClose}
      >
        {children}
      </Tag>
    </div>
  );
};

export default AppTag;
