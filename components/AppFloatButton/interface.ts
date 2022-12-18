import { ReactNode } from "react";

export interface IAppFloatButtonProps {
  icon?: ReactNode;
  description?: ReactNode;
  tooltip?: ReactNode;
  type?: "default" | "primary";
  shape?: "circle" | "square";
  onClick?: (e: any) => void;
  href?: string;
  target?: string;
}
