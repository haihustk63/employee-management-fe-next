import AppModal from "@components/AppModal";
import JobCard from "@components/pages/Home/LastestJobs/JobCard";
import React, { FC } from "react";

const ModalSelectJob: FC<{
  jobList: any;
  open: boolean;
  onToggle: any;
  onSelectJob: any;
}> = ({ jobList = [], open, onToggle, onSelectJob }) => {
  return (
    <AppModal open={open} onCancel={onToggle} wrapClassName="modal-select-job">
      {jobList.map((jobItem: any) => (
        <JobCard
          key={jobItem.id}
          jobItem={jobItem}
          buttonViewDetail
          onClick={onSelectJob(jobItem)}
        />
      ))}
    </AppModal>
  );
};

export default ModalSelectJob;
