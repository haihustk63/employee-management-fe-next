import { Formik, Form } from "formik";
import { Typography } from "antd";
import { FC, useState } from "react";
import { useContext } from "react";
import { useTranslation } from "next-i18next";
import { object, string, number } from "yup";

import FormItem from "@components/FormItem";

import { FORM_ITEM_TYPES } from "constants/common";
import AppButton from "@components/AppButton";
import { HomeContext } from "pages";

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
  jobId: number().required("Please choose a job"),
});

const ApplyNowForm: FC = () => {
  const { t } = useTranslation() as any;

  const { jobListFull, submitApplyForm, handleToggleModal } = useContext(
    HomeContext
  ) as any;

  const [error, setError] = useState("");

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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
    >
      {({ values, handleSubmit, handleChange }) => {
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
            <FormItem
              name="jobId"
              value={values.jobId}
              type={SELECT}
              options={jobListFull}
              placeholder="Choose a job"
            />
            <AppButton
              buttonTitle={t("common.txt_apply_now")}
              htmlType="submit"
            />
            <Text style={{ color: "var(--color-primary-orange)" }}>
              {error}
            </Text>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ApplyNowForm;
