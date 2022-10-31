import { Button } from "antd";
import { useTranslation } from "next-i18next";
import { FC } from "react";

interface IAppButton {
  buttonTitle: string;
  onClick: () => void;
}

const AppButton: FC<IAppButton> = ({ buttonTitle, onClick }) => {
  return <Button onClick={onClick}>{buttonTitle}</Button>;
};

export default AppButton;
