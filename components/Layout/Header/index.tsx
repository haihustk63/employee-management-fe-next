import { Dropdown, Image, Layout } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import AppButton from "@components/AppButton";
import MenuIcon from "@public/icons/MenuIcon";
import { HEADER_CATEGORY, REACT_APP_URL } from "constants/common";
import { useRouter } from "next/router";
import { FC } from "react";

const { Header } = Layout;

const AppHeader: FC<{ toggleApplyModal: any }> = ({ toggleApplyModal }) => {
  const { t } = useTranslation() as any;
  const router = useRouter();

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
          loading="lazy"
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
        <AppButton
          buttonTitle={t("common.txt_apply_now")}
          onClick={toggleApplyModal}
        />
        <a href={`${REACT_APP_URL}/login`}>
          <AppButton buttonTitle={t("header.txt_login")} />
        </a>
      </div>

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
