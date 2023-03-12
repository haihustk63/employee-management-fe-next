import ModalApplyNow from "@components/ModalApplyNow";
import { Layout } from "antd";
import cx from "classnames";
import { FC, useState } from "react";
import AppFooter from "./Footer";

import AppHeader from "./Header";

const { Content } = Layout;

const CommonLayout: FC<{ children: any }> = ({ children }) => {
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const toggleApplyModal = () => setOpenApplyModal(!openApplyModal);

  return (
    <main className={cx("common-layout")}>
      <AppHeader toggleApplyModal={toggleApplyModal} />
      <Content>{children}</Content>
      <AppFooter />
      <ModalApplyNow open={openApplyModal} onCancel={toggleApplyModal} />
    </main>
  );
};

export default CommonLayout;
