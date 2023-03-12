import ApplyNowForm from "@components/ApplyNowForm";
import AppModal from "@components/AppModal";
import React, { FC } from "react";

const ModalApplyNow: FC<{
  open: boolean;
  onCancel: any;
  openSuccessModal: boolean;
  jobList: any;
  toggleSuccessModal: any;
  submitApplyForm: any;
}> = ({ open, onCancel, jobList, submitApplyForm, toggleSuccessModal }) => {
  return (
    <AppModal
      open={open}
      onCancel={onCancel}
      wrapClassName="modal-apply-now"
      footer={null}
    >
      <ApplyNowForm
        jobListFull={jobList}
        handleToggleModal={toggleSuccessModal}
        submitApplyForm={submitApplyForm}
      />
    </AppModal>
  );
};

export default ModalApplyNow;
