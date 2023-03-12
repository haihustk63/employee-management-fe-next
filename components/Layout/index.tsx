import AppModal from "@components/AppModal";
import ModalApplyNow from "@components/Layout/Header/ModalApplyNow";
import { Layout } from "antd";
import cx from "classnames";
import { FC, useEffect, useState } from "react";
import { candidateService } from "services/candidate";
import { jobService } from "services/jobs";
import AppFooter from "./Footer";

import AppHeader from "./Header";

const { Content } = Layout;

const CommonLayout: FC<{ children: any }> = ({ children }) => {
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    jobService.getAllJobs()?.then(({ data } = {}) => setJobList(data));
  }, []);

  const submitApplyForm = async (data: any) => {
    await candidateService.postApplyForm(data);
    toggleApplyModal();
  };

  const toggleApplyModal = () => setOpenApplyModal(!openApplyModal);
  const toggleSuccessModal = () => {
    setOpenSuccessModal(!openSuccessModal);
  };
  return (
    <main className={cx("common-layout")}>
      <AppHeader toggleApplyModal={toggleApplyModal} />
      <Content>{children}</Content>
      <AppFooter />
      <ModalApplyNow
        open={openApplyModal}
        onCancel={toggleApplyModal}
        openSuccessModal={openSuccessModal}
        toggleSuccessModal={toggleSuccessModal}
        jobList={jobList}
        submitApplyForm={submitApplyForm}
      />
      <AppModal
        title="Congratulation!"
        open={openSuccessModal}
        onCancel={toggleSuccessModal}
        onOk={toggleSuccessModal}
      >
        <h1>Your application is sent!</h1>
      </AppModal>
    </main>
  );
};

export default CommonLayout;
