import JobList from "@components/pages/Job/JobList";
import Search from "@components/pages/Job/Search";
import { withServerSideProps } from "hoc/withServerSideProps";
import { GetServerSideProps } from "next";
import { createContext, useState } from "react";
import { jobService } from "services/jobs";
import { positionService } from "services/position";

export const JobManagementContext = createContext({});

export default function JobPage({ jobList, allPositions }: any) {
  const [currentJobList, setCurrentJobList] = useState(jobList);

  const handleGetJobs = async (params: any) => {
    const newResult = await jobService.getAllJobs(params);
    const newJobs = newResult?.data;
    setCurrentJobList(newJobs);
  };

  return (
    <JobManagementContext.Provider
      value={{ currentJobList, allPositions, handleGetJobs }}
    >
      <div className="job-page">
        <Search />
        <JobList />
      </div>
    </JobManagementContext.Provider>
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
      const jobList = jobResult?.data;
      return { jobList, allPositions };
    } catch (err) {
      console.error(err);
    }
  }
);
