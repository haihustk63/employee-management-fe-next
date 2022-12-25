import { FieldInputProps } from "formik";
import { ReactNode } from "react";

export interface IFormItemProps {
  name?: string;
  label?: string;
  mode?: "multiple" | "tags";
  placeholder?: string;
  value?: string;
  type?: string;
  prefix?: ReactNode;
  suffixIcon?: ReactNode;
  maxLength?: number;
  disabled?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  onChange?: any;
  onBlur?: any;
  onClear?: any;
  clearIcon?: ReactNode;
  options?: { key: string; label: string | number }[];
  defaultValue?: string | string[];
  popupClassName?: string;
  dropdownMatchSelectWidth?: boolean | number;
  dropdownRender?: (originNode: ReactNode) => ReactNode;
  loading?: boolean;
  onPopupScroll?: any;
  onSelect?: any;
  ref?: any;
  min?: number;
  max?: number;
  formatter?: (
    value: number | string,
    info: { userTyping: boolean; input: string }
  ) => string;
  precision?: number;
  readOnly?: boolean;
  step?: number;
  onStep?: (
    value: number,
    info: { offset: number; type: "up" | "down" }
  ) => void;
  onPressEnter?: any;
}

export interface IFieldProps {
  field: any;
  form: any;
  props: any;
}
