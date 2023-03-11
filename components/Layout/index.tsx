import { Layout } from "antd";
import cx from "classnames";
import { FC } from "react";
import AppFooter from "./Footer";

import AppHeader from "./Header";

const { Content } = Layout;

const CommonLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <main className={cx("common-layout")}>
      <AppHeader />
      <Content>{children}</Content>
      <AppFooter />
    </main>
  );
};

export default CommonLayout;
