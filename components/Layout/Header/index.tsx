import { useCallback } from "react";
import { Layout, Menu, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { HEADER_CATEGORY } from "constants/common";
import AppDropDown from "@components/AppDropdown";
import AppButton from "@components/AppButton";

const { Text } = Typography;

const { Header } = Layout;

const AppHeader = () => {
  const { t } = useTranslation();

  // const renderMenu = useCallback(
  //   (menu: { key: number; label: string }[]) => {
  //     const tMenu = menu.map((item) => ({
  //       key: item.key,
  //       label: t(item.label),
  //     }));

  //     return <Menu items={tMenu} />;
  //   },
  //   [t]
  // );

  return (
    <Header className="app-header">
      <h1 className="app-header__logo">Logo</h1>

      <ul className="app-header__category">
        {HEADER_CATEGORY.map((item) => {
          return (
            <li key={item.title}>
              <Link href="#">{t(item.title)}</Link>
            </li>
          );
        })}
      </ul>

      <div className="app-header__apply">
        <AppButton buttonTitle={t("common.txt_apply_now")} onClick={() => {}} />
        <AppButton buttonTitle={t("header.txt_login")} onClick={() => {}} />
        <AppButton buttonTitle={"Theme"} onClick={() => {}} />
        <AppButton buttonTitle={"Language"} onClick={() => {}} />
      </div>
    </Header>
  );
};

export default AppHeader;
