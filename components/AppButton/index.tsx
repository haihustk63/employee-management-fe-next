import { Button } from "antd";
import { useTranslation } from "next-i18next";
import { FC } from "react";

interface IAppButton {
  buttonTitle: string;
  onClick?: () => void;
  htmlType?: "button" | "submit" | "reset" | undefined;
}

const AppButton: FC<IAppButton> = ({ buttonTitle, onClick, htmlType }) => {
  return (
    <Button onClick={onClick} htmlType={htmlType}>
      {buttonTitle}
    </Button>
  );
};

export default AppButton;
