import { Typography } from "antd";
import { Form, Formik } from "formik";
import { useTranslation } from "next-i18next";
import { FC, useRef, useState } from "react";
import { number, object, string } from "yup";

import FormItem from "@components/FormItem";

import AppButton from "@components/AppButton";
import { FORM_ITEM_TYPES } from "constants/common";
import ModalSelectJob from "./ModalSelectJob";

const { TEXT, SELECT } = FORM_ITEM_TYPES;

const { Title, Text } = Typography;

const initialValues = {
  name: "",
  phone: "",
  email: "",
  cvLink: "",
  jobId: undefined,
};

const validateSchema = object({
  name: string().required("Name is required"),
  email: string().required("Email is required").email("Invalid email"),
  cvLink: string().required("CV is required"),
});

const ApplyNowForm: FC<{
  jobListFull: any;
  submitApplyForm: any;
  handleToggleModal: any;
}> = ({ jobListFull, submitApplyForm, handleToggleModal }) => {
  const { t } = useTranslation() as any;
  const [error, setError] = useState("");
  const [showModalSelectJob, setShowModalSelectJob] = useState(false);
  const [job, setJob] = useState<any>();
  const formRef = useRef(null) as any;

  const toggleModalSelectJob = () => setShowModalSelectJob(!showModalSelectJob);

  const handleSubmit = async (data: any, { resetForm }: any) => {
    try {
      setError("");
      await submitApplyForm(data);
      resetForm?.();
      handleToggleModal();
    } catch (e) {
      setError("Something went wrong. Please try again!");
    }
  };

  const handleChangeJob = (jobItem: any) => () => {
    formRef.current?.setFieldValue("jobId", jobItem.id);
    setJob(jobItem);
    toggleModalSelectJob();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
      innerRef={formRef}
    >
      {({ values, errors, handleSubmit, handleChange }) => {
        return (
          <Form onSubmit={handleSubmit} className="apply-now-form">
            <Title className="app-title">{t("common.txt_apply_now")}</Title>
            <FormItem
              name="name"
              value={values.name}
              type={TEXT}
              onChange={handleChange}
              placeholder={t("apply.txt_name_placeholder")}
            />
            <FormItem
              name="phone"
              value={values.phone}
              type={TEXT}
              onChange={handleChange}
              placeholder={t("apply.txt_phone_placeholder")}
            />
            <FormItem
              name="email"
              value={values.email}
              type={TEXT}
              onChange={handleChange}
              placeholder={t("apply.txt_email_placeholder")}
            />
            <FormItem
              name="cvLink"
              value={values.cvLink}
              type={TEXT}
              onChange={handleChange}
              placeholder={t("apply.txt_cvlink_placeholder")}
            />
            <AppButton
              buttonTitle="Select job"
              onClick={toggleModalSelectJob}
            />
            {job && <Text>Job: {job?.title}</Text>}
            <AppButton
              buttonTitle={t("common.txt_apply_now")}
              htmlType="submit"
              className="-green"
            />
            <Text style={{ color: "var(--color-primary-orange)" }}>
              {error}
            </Text>
            <ModalSelectJob
              jobList={jobListFull}
              open={showModalSelectJob}
              onToggle={toggleModalSelectJob}
              onSelectJob={handleChangeJob}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ApplyNowForm;
