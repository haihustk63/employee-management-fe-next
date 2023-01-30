import { Image, Typography } from "antd";
import { useAnimated } from "hooks";
import { useTranslation } from "next-i18next";

const { Title, Text } = Typography;

const AboutUs = () => {
  const { t } = useTranslation();
  const { ref, animated } = useAnimated();

  return (
    <div
      className="home-about-us"
      id="home-about-us"
      ref={ref}
      style={{ animation: animated ? "fadeToClear ease-in 1s" : undefined }}
    >
      <div className="title">
        <Image
          src="images/graphic_about_us.svg"
          alt={t("home.about.txt_alt_banner")}
          className="image"
          preview={false}
        />
        <Text className="text">About us</Text>
      </div>

      <div className="content">
        <div className="part">
          <Image
            src="images/graphic_creative_thinking.svg"
            alt={t("home.about.txt_alt_banner")}
            preview={false}
          />
          <div className="content">
            <Title className="title" level={2}>
              {t("home.about.txt_our_story")}
            </Title>
            <Text>{t("home.about.txt_our_story_content")}</Text>
          </div>
        </div>

        <div className="part">
          <Image
            src="images/graphic_wandering_mind.svg"
            alt={t("home.about.txt_alt_banner")}
            preview={false}
          />
          <div className="content">
            <Title className="title" level={2}>
              {t("home.about.txt_our_mission")}
            </Title>
            <Text>{t("home.about.txt_our_mission_content")}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
