import { FC } from "react";
import { Field } from "formik";
import { Input, Select } from "antd";

import { IFieldProps, IFormItemProps } from "./interface";

import { FORM_ITEM_TYPES } from "constants/common";

const { TEXT, TEXTAREA, SELECT } = FORM_ITEM_TYPES;

const { TextArea } = Input;

const InputField = ({ field, form, ...props }: IFieldProps) => {
  return <Input {...field} {...props} />;
};

const SelectField = ({ field, form, ...props }: IFieldProps) => {
  const handleChange = (value: any) => {
    form.setFieldValue(field.name, value);
  };
  return <Select {...field} {...props} onChange={handleChange} />;
};

const renderFormItemComponent = (type: any) => {
  switch (type) {
    case TEXT: {
      return InputField;
    }

    case SELECT: {
      return SelectField;
    }

    default: {
      return InputField;
    }
  }
};

const FormItem: FC<IFormItemProps> = ({ name, type, ...props }) => {
  const renderComponent = renderFormItemComponent(type);
  return (
    <Field name={name} type={type} {...props} component={renderComponent} />
  );
};

export default FormItem;
