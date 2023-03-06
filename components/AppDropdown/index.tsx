import { Dropdown } from "antd";
import { FC } from "react";

interface IAppDropdown {
  children?: any;
  menu: any;
  trigger?: ("click" | "hover" | "contextMenu")[];
}

const AppDropDown: FC<IAppDropdown> = ({ children, menu, trigger }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <Dropdown menu={menu} trigger={trigger}>
      <div>{children}</div>
    </Dropdown>
  );
};

export default AppDropDown;
