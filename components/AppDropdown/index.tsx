import { Dropdown } from "antd";
import Link from "next/link";
import { FC } from "react";

interface IAppDropdown {
  children: any;
  menu: any;
}

const AppDropDown: FC<IAppDropdown> = ({ children, menu }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
  };
  return (
    <Dropdown overlay={menu}>
      <Link href="#" onClick={handleClick}>
        {children}
      </Link>
    </Dropdown>
  );
};

export default AppDropDown;
