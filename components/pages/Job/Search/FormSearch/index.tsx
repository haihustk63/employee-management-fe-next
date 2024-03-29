import { Form, Formik } from "formik";
import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { useTranslation } from "next-i18next";

import { FORM_ITEM_TYPES, JOB_LEVELS, JOB_TYPES } from "constants/common";
import FormItem from "@components/FormItem";
import AppButton from "@components/AppButton";
import WorkOnComputerIcon from "@public/icons/WorkOnComputerIcon";
import ClockIcon from "@public/icons/ClockIcon";
import LevelIcon from "@public/icons/LevelIcon";
import { addKeyToData, makeCleanObject } from "utils";
import { JobManagementContext } from "pages/jobs";
import { GlobalLeaderIcon } from "@public/icons/GlobalLeaderIcon";

const { TEXT, SELECT } = FORM_ITEM_TYPES;

const initialValues = {
  title: "",
  typeOfJob: undefined,
  level: undefined,
  positionId: undefined,
};

const FormSearch: FC = () => {
  const { t } = useTranslation();
  const { allPositions = [], handleGetJobs } = useContext(
    JobManagementContext
  ) as any;
  const formRef = useRef() as any;

  // const { handleChange, setFieldValue, values } = formRef?.current || {};

  // const [isTitleChange, setIsTitleChange] = useState(false);

  // const handleSetSearchParams = (field: string) => (value: any) => {
  //   const params = { ...queryParams, [field]: value };
  //   const pureParams = makeCleanObject(params);
  //   setQueryParams(pureParams);
  // };

  // useEffect(() => {
  //   if (isTitleChange) {
  //     handleSetSearchParams("title")(values.title);
  //     setIsTitleChange(false);
  //   }
  // }, [isTitleChange]);

  // const handleSetTitleChange = () => {
  //   setIsTitleChange(true);
  // };

  // const debounceSetTitleParams = useMemo(
  //   () => debounce(handleSetTitleChange, 500),
  //   []
  // );

  // useEffect(() => {
  //   return () => {
  //     debounceSetTitleParams.cancel();
  //   };
  // }, []);

  // const handleChangeTitle = (e: any) => {
  //   handleChange(e);
  //   debounceSetTitleParams();
  // };

  // const handleChangeOtherValue = (field: string) => (value: string) => {
  //   setFieldValue(field, value);
  //   handleSetSearchParams(field)(value);
  // };
  // useEffect(() => {
  //   if (searchParams.toString() && !isInit) {
  //     const title = searchParams.get("title");
  //     const typeOfJob = searchParams.get("typeOfJob");
  //     const level = searchParams.get("level");
  //     const positionId = searchParams.get("positionId");

  //     formRef?.current?.setFieldValue("title", title);
  //     if (typeOfJob !== undefined && typeOfJob !== null) {
  //       formRef?.current?.setFieldValue("typeOfJob", Number(typeOfJob));
  //     }
  //     if (level !== undefined && level !== null) {
  //       formRef?.current?.setFieldValue("level", Number(level));
  //     }
  //     if (positionId !== undefined && positionId !== null) {
  //       formRef?.current?.setFieldValue("positionId", Number(positionId));
  //     }

  //     const params = { title, typeOfJob, level, positionId };
  //     const pureParams = makeCleanObject(params);
  //     setQueryParams(pureParams);
  //   }
  //   setIsInit(true);
  // }, [searchParams, isInit]);

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
              name="title"
              placeholder={t("home.search.txt_keyword_placeholder")}
              type={TEXT}
              value={values.title}
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSearch;
