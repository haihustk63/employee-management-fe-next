import { FC } from "react";
import { Layout } from "antd";
import { Inter } from "@next/font/google";
import cx from "classnames";

import AppFooter from "./Footer";
import AppHeader from "./Header";

const { Content } = Layout;

const inter = Inter();

const CommonLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <main className={cx(inter.className, "common-layout")}>
      <AppHeader />
      <Content>{children}</Content>
      <AppFooter />
    </main>
  );
};

export default CommonLayout;
