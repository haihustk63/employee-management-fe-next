import { Image, Typography } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import AppButton from "@components/AppButton";

const { Text, Title } = Typography;

const Banner = () => {
  const { t } = useTranslation() as any;

  return (
    <div className="home-banner">
      <div className="text">
        <Text className="main">{t("home.banner.txt_welcome")}</Text>
        <Text className="description">
          {t("home.banner.txt_welcome_introduction")}
        </Text>
        <Link href="#home-apply-now" className="apply">
          <AppButton buttonTitle={t("common.txt_apply_now")} />
        </Link>
      </div>
      <Image
        preview={false}
        src="images/bg_home_banner.svg"
        alt={t("home.banner.txt_alt_banner")}
        loading="lazy"
      />
      <div className="pattern"></div>
    </div>
  );
};

export default Banner;
