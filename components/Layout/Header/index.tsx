import { Dropdown, Layout, MenuProps, Typography } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Image } from "antd";

import {
  HEADER_CATEGORY,
  LANGUAGE_SUPPORT,
  REACT_APP_URL,
} from "constants/common";
import AppButton from "@components/AppButton";
import { useContext } from "react";
import { AppConfigContext } from "context/app-config";
import DarkThemeIcon from "@public/icons/DarkThemeIcon";
import LightThemeIcon from "@public/icons/LightThemeIcon";
import AppDropDown from "@components/AppDropdown";
import LanguageIcon from "@public/icons/LanguageIcon";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const { Header } = Layout;

const AppHeader = () => {
  const { t } = useTranslation();

  const { config, setConfig } = useContext(AppConfigContext) as any;
  const { theme } = config;

  const handleChangeTheme = () => {
    if (theme === "dark") {
      setConfig((prev: any) => ({ ...prev, theme: "light" }));
    } else {
      setConfig((prev: any) => ({ ...prev, theme: "dark" }));
    }
  };

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
      <Link href="/">
        <Image
          className="app-header__logo"
          src="/images/app_logo.png"
          alt="App Logo"
          preview={false}
        />
      </Link>

      <ul className="app-header__category">
        {HEADER_CATEGORY.map((item) => {
          return (
            <li key={item.title}>
              <Link href={item.href}>{t(item.title)}</Link>
            </li>
          );
        })}
      </ul>

      <div className="app-header__apply">
        <Link href="#home-apply-now">
          <AppButton buttonTitle={t("common.txt_apply_now")} />
        </Link>
        <a href={`${REACT_APP_URL}/login`}>
          <AppButton buttonTitle={t("header.txt_login")} />
        </a>
        <span onClick={handleChangeTheme}>
          {theme === "dark" ? (
            <DarkThemeIcon color="black" bgColor="white" />
          ) : (
            <LightThemeIcon color="white" bgColor="black" />
          )}
        </span>
        <Dropdown
          menu={{ items: LANGUAGE_SUPPORT }}
          trigger={["hover"]}
          placement="bottomRight"
        >
          <div>
            <LanguageIcon
              color={theme === "dark" ? "black" : "white"}
              bgColor={theme === "dark" ? "white" : "black"}
            />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
