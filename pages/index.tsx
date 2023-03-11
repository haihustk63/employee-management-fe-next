import { GetServerSideProps } from "next";
import Head from "next/head";
import { createContext, useState } from "react";

import AppModal from "@components/AppModal";
import Banner from "@components/pages/Home/Banner";
import { withServerSideProps } from "hoc/withServerSideProps";
import { candidateService } from "services/candidate";
import { positionService } from "services/position";
import { jobService } from "services/jobs";
import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("@components/pages/Home/AboutUs"));
const EmployeeReviews = dynamic(
  () => import("@components/pages/Home/EmployeeReviews")
);
const LastestJobs = dynamic(() => import("@components/pages/Home/LastestJobs"));
const ApplyNow = dynamic(() => import("@components/pages/Home/ApplyNow"));
const Compensation = dynamic(
  () => import("@components/pages/Home/Compensation")
);
const FrequentlyAskedQuestion = dynamic(
  () => import("@components/pages/Home/FAQ")
);

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
          <link rel="icon" href="/images/logo-tran-green.png" />
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
          title="Congratulation!"
          open={visibleModal}
          onCancel={handleToggleModal}
          onOk={handleToggleModal}
        >
          <h1>Your application is sent!</h1>
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
      const jobList = jobResult?.data.filter(
        (item: any, index: number) => index <= 4
      );
      const jobListFull = jobResult?.data.map((item: any, index: number) => ({
        label: item?.title,
        value: item?.id,
        key: item?.id,
      }));
      return { allPositions, jobList, jobListFull };
    } catch (err) {
      console.error(err);
    }
  }
);
