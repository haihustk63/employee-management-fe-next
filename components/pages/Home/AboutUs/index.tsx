import { Image, Typography } from "antd";
import { useTranslation } from "next-i18next";

const { Title, Text } = Typography;

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="home-about-us">
        <Image src="images/bg_home_about_us_banner_2.png" alt={t("home.about.txt_alt_banner")} className="home-about-us__banner"/>
      <div className="home-about-us__part">
        <div className="home-about-us__content">
          <Title level={3}>{t("home.about.txt_our_story")}</Title>
          <Text>{t("home.about.txt_our_story_content")}</Text>
        </div>
        <Image src="images/bg_home_about_us_banner.svg" alt={t("home.about.txt_alt_banner")} />
      </div>
      <div className="home-about-us__part">
        <Image src="images/bg_home_about_us_banner.svg" alt={t("home.about.txt_alt_banner")} />
        <div className="home-about-us__content">
          <Title level={3}>{t("home.about.txt_our_mission")}</Title>
          <Text>{t("home.about.txt_our_mission_content")}</Text>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
