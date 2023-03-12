import { Form, Formik } from "formik";
import { useTranslation } from "next-i18next";
import { FC, useContext, useRef } from "react";

import AppButton from "@components/AppButton";
import FormItem from "@components/FormItem";
import ClockIcon from "@public/icons/ClockIcon";
import { GlobalLeaderIcon } from "@public/icons/GlobalLeaderIcon";
import LevelIcon from "@public/icons/LevelIcon";
import WorkOnComputerIcon from "@public/icons/WorkOnComputerIcon";
import { FORM_ITEM_TYPES, JOB_LEVELS, JOB_TYPES } from "constants/common";
import { JobManagementContext } from "pages/jobs";
import { addKeyToData } from "utils";

const { TEXT, SELECT } = FORM_ITEM_TYPES;

const initialValues = {
  keyword: "",
  typeOfJob: undefined,
  level: undefined,
  positionId: undefined,
};

const FormSearch: FC = () => {
  const { t } = useTranslation() as any;
  const { allPositions = [], handleGetJobs } = useContext(
    JobManagementContext
  ) as any;
  const formRef = useRef() as any;

  const clearFilter = () => {
    formRef?.current.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleGetJobs}
      innerRef={formRef}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} className="job-form-search">
            <FormItem
              name="keyword"
              placeholder={t("home.search.txt_keyword_placeholder")}
              type={TEXT}
              value={values.keyword}
              onChange={handleChange}
              prefix={<WorkOnComputerIcon color="green" />}
            />
            <FormItem
              name="typeOfJob"
              type={SELECT}
              value={values.typeOfJob}
              options={addKeyToData(JOB_TYPES)}
              suffixIcon={<ClockIcon color="green" />}
              clearIcon={false}
              placeholder="Type of job"
            />
            <FormItem
              name="level"
              type={SELECT}
              value={values.level}
              options={addKeyToData(JOB_LEVELS)}
              suffixIcon={<LevelIcon color="green" />}
              clearIcon={false}
              placeholder="Job level"
            />
            <FormItem
              name="positionId"
              type={SELECT}
              value={values.positionId}
              options={allPositions}
              suffixIcon={<GlobalLeaderIcon color="green" />}
              clearIcon={false}
              placeholder="Position"
            />
            <AppButton buttonTitle={t("common.txt_search")} htmlType="submit" />
            <AppButton buttonTitle="Clear" onClick={clearFilter} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSearch;
