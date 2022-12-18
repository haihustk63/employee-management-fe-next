import { Formik, Form } from "formik";
import { Typography } from "antd";
import { FC } from "react";
import { useContext } from "react";
import { useTranslation } from "next-i18next";
import { object, string, number } from "yup";

import FormItem from "@components/FormItem";

import { FORM_ITEM_TYPES } from "constants/common";
import AppButton from "@components/AppButton";
import { PositionsContext } from "pages";

const { TEXT, SELECT } = FORM_ITEM_TYPES;

const { Title } = Typography;

const initialValues = {
  name: "",
  phone: "",
  email: "",
  cvLink: "",
  positionId: undefined,
};

const validateSchema = object({
  name: string().required("Name is required"),
  email: string().required("Email is required"),
  cvLink: string().required("CV is required"),
  positionId: number().required("Please choose a job"),
});

const ApplyNowForm: FC = () => {
  const { t } = useTranslation();

  const { allPositions, submitApplyForm, handleToggleModal } = useContext(
    PositionsContext
  ) as any;

  const handleSubmit = (data: any, { resetForm }: any) => {
    submitApplyForm(data);
    resetForm?.();
    handleToggleModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
    >
      {({ values, errors, touched, handleSubmit, handleChange }) => {
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
              name="positionId"
              value={values.positionId}
              type={SELECT}
              options={allPositions}
              placeholder="Choose a position"
            />
            <AppButton
              buttonTitle={t("common.txt_apply_now")}
              htmlType="submit"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ApplyNowForm;
