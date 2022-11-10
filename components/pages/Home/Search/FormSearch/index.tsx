import { Form, Formik } from "formik";
import { FC } from "react";

import { FORM_ITEM_TYPES } from "constants/common";
import FormItem from "@components/FormItem";
import AppButton from "@components/AppButton";
import { useTranslation } from "next-i18next";

const { TEXT, SELECT } = FORM_ITEM_TYPES;

const initialValues = {
  keywords: "",
  typeOfJob: "",
  level: "",
  area: "",
};

const DefaultOptions = [
  {
    key: 1,
    label: "default",
    value: "",
  },
  {
    key: 2,
    label: "label 1",
    value: "value 1",
  },
  {
    key: 3,
    label: "label 1",
    value: "value 1",
  },
];

const FormSearch: FC = () => {
  const { t } = useTranslation();

  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, errors, touched, handleChange, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} className="home-form-search">
            <FormItem
              name="keywords"
              placeholder={t("home.search.txt_keyword_placeholder")}
              type={TEXT}
              value={values.keywords}
              onChange={handleChange}
            />
            <FormItem
              name="field"
              type={SELECT}
              value={values.typeOfJob}
              options={DefaultOptions}
            />
            <FormItem
              name="framework"
              type={SELECT}
              value={values.level}
              options={DefaultOptions}
            />
            <FormItem
              name="area"
              type={SELECT}
              value={values.area}
              options={DefaultOptions}
            />
            <AppButton buttonTitle={t("common.txt_search")} htmlType="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSearch;
