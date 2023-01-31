import { GetServerSideProps } from "next";
import Head from "next/head";
import { createContext, useState } from "react";

import AppModal from "@components/AppModal";
import AboutUs from "@components/pages/Home/AboutUs";
import ApplyNow from "@components/pages/Home/ApplyNow";
import Banner from "@components/pages/Home/Banner";
import EmployeeReviews from "@components/pages/Home/EmployeeReviews";
import LastestJobs from "@components/pages/Home/LastestJobs";
import { withServerSideProps } from "hoc/withServerSideProps";
import { candidateService } from "services/candidate";
import { positionService } from "services/position";
import Compensation from "@components/pages/Home/Compensation";
import FrequentlyAskedQuestion from "@components/pages/Home/FAQ";
import { jobService } from "services/jobs";

export const HomeContext = createContext({});

const submitApplyForm = async (data: any) => {
  await candidateService.postApplyForm(data);
};

export default function Home({ allPositions, jobList, jobListFull }: any) {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleToggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <HomeContext.Provider
      value={{
        allPositions,
        jobList,
        jobListFull,
        submitApplyForm,
        handleToggleModal,
      }}
    >
      <div className="homepage">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Banner />
        <div className="home-page__wrap">
          <LastestJobs />
          <AboutUs />
          <EmployeeReviews />
          <Compensation />
          <FrequentlyAskedQuestion />
          {/* hiring flow here */}
          <ApplyNow />
        </div>
        <AppModal
          title="Example modal"
          open={visibleModal}
          onCancel={handleToggleModal}
          onOk={handleToggleModal}
        >
          <h1>Bạn đã gửi thông tin thành công!</h1>
        </AppModal>
      </div>
    </HomeContext.Provider>
  );
}

export const getServerSideProps: GetServerSideProps = withServerSideProps(
  async () => {
    try {
      const positionResult = await positionService.getAllPositions();
      const allPositions = positionResult?.allPositions.map((item: any) => ({
        label: item?.name,
        value: item?.id,
        key: item?.id,
        description: item?.description,
      }));
      const jobResult = await jobService.getAllJobs();
      const jobList = jobResult?.allJobs.filter(
        (item: any, index: number) => index <= 4
      );
      const jobListFull = jobResult?.allJobs.map(
        (item: any, index: number) => ({
          label: item?.title,
          value: item?.id,
          key: item?.id,
        })
      );
      return { allPositions, jobList, jobListFull };
    } catch (err) {
      console.error(err);
    }
  }
);
