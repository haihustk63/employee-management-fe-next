import { Form, Formik } from "formik";
import { FC } from "react";

import { FORM_ITEM_TYPES, JOB_LEVELS, JOB_TYPES } from "constants/common";
import FormItem from "@components/FormItem";
import AppButton from "@components/AppButton";
import { useTranslation } from "next-i18next";
import WorkOnComputerIcon from "@public/icons/WorkOnComputerIcon";
import ClockIcon from "@public/icons/ClockIcon";
import LevelIcon from "@public/icons/LevelIcon";

const { TEXT, SELECT } = FORM_ITEM_TYPES;

const initialValues = {
  keywords: "",
  typeOfJob: undefined,
  level: undefined,
};

const FormSearch: FC = () => {
  const { t } = useTranslation();

  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} className="home-form-search">
            <FormItem
              name="keywords"
              placeholder={t("home.search.txt_keyword_placeholder")}
              type={TEXT}
              value={values.keywords}
              onChange={handleChange}
              prefix={<WorkOnComputerIcon color="green" />}
            />
            <FormItem
              name="field"
              type={SELECT}
              value={values.typeOfJob}
              options={JOB_TYPES}
              suffixIcon={<ClockIcon color="green" />}
              clearIcon={false}
              placeholder="Type of job"
            />
            <FormItem
              name="framework"
              type={SELECT}
              value={values.level}
              options={JOB_LEVELS}
              suffixIcon={<LevelIcon color="green" />}
              clearIcon={false}
              placeholder="Job level"
            />
            <AppButton buttonTitle={t("common.txt_search")} htmlType="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSearch;
