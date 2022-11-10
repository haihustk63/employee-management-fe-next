import AppButton from "@components/AppButton";
import { Image, Typography } from "antd";
import { useTranslation } from "next-i18next";

const { Text, Title } = Typography;

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="home-banner">
      <div className="home-banner__text">
        <Text className="home-banner__text--large">{t("home.banner.txt_welcome")}</Text>
        <Text>{t("home.banner.txt_welcome_introduction")}</Text>
        <AppButton buttonTitle={t("common.txt_apply_now")} onClick={() => {}} />
      </div>
      <Image src="images/bg_home_banner.svg" alt={t("home.banner.txt_alt_banner")} />
    </div>
  );
};

export default Banner;
