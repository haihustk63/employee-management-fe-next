import { Dropdown, Layout, Menu, MenuProps, Space, Typography } from "antd";
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
import MenuIcon from "@public/icons/MenuIcon";
import { useRouter } from "next/router";

const { Header } = Layout;

const AppHeader = () => {
  const { t } = useTranslation() as any;
  const router = useRouter();

  const { config, setConfig } = useContext(AppConfigContext) as any;
  const { theme } = config;

  const handleChangeTheme = () => {
    if (theme === "dark") {
      setConfig((prev: any) => ({ ...prev, theme: "light" }));
    } else {
      setConfig((prev: any) => ({ ...prev, theme: "dark" }));
    }
  };

  const navigateToSection = (id: string) => () => {
    router.push(`/${id}`);
  };

  return (
    <Header className="app-header">
      <Link href="/">
        <Image
          className="app-header__logo"
          src="/images/logo-tran-green.png"
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
      </div>

      <Space direction="horizontal">
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
      </Space>
      <Dropdown
        className="app-header__category__responsive"
        menu={{
          items: HEADER_CATEGORY.map((item) => ({
            label: t(item.title),
            key: item.title,
            onClick: navigateToSection(item.href),
          })),
        }}
        trigger={["hover"]}
        placement="bottomRight"
      >
        <div>
          <MenuIcon color="black" />
        </div>
      </Dropdown>
    </Header>
  );
};

export default AppHeader;
