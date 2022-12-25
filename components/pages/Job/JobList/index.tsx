import JobCard from "@components/pages/Home/LastestJobs/JobCard/index";
import Link from "next/link";
import { JobManagementContext } from "pages/jobs";
import React, { FC, useContext } from "react";

const JobList: FC = () => {
  const { currentJobList: jobList = [] } = useContext(
    JobManagementContext
  ) as any;

  return (
    <div className="job-list">
      {jobList.map((jobItem: any) => {
        return (
          <Link
            href={`/job-detail/${jobItem.id}`}
            key={jobItem.id}
            className="link"
          >
            <JobCard jobItem={jobItem} />
          </Link>
        );
      })}
    </div>
  );
};

export default JobList;
