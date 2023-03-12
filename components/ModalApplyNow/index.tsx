import ApplyNowForm from "@components/ApplyNowForm";
import AppModal from "@components/AppModal";
import React, { FC } from "react";

const ModalApplyNow: FC<{ open: boolean; onCancel: any }> = ({
  open,
  onCancel,
}) => {
  return (
    <AppModal
      open={open}
      onCancel={onCancel}
      wrapClassName="modal-apply-now"
      footer={null}
    >
      <ApplyNowForm />
    </AppModal>
  );
};

export default ModalApplyNow;
