import { Typography } from "antd";

import AppCard from "@components/AppCard";
import { BANNER_SOLUTIONS } from "constants/common";
import { useTranslation } from "next-i18next";

const { Title } = Typography;

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <div className="home-solutions">
      <Title>{t("common.txt_our_solutions")}</Title>
      <ul>
        {BANNER_SOLUTIONS.map((item) => (
          <AppCard key={item.cardTitle} cardTitle={item.cardTitle} hoverable>
            {item.content}
          </AppCard>
        ))}
      </ul>
    </div>
  );
};

export default Solutions;
