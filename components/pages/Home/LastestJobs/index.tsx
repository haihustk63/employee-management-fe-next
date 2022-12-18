import AppCard from "@components/AppCard";
import AppTag from "@components/AppTag";
import ClockIcon from "@public/icons/ClockIcon";
import ExploreIcon from "@public/icons/ExploreIcon";
import HotJarIcon from "@public/icons/HotJarIcon";
import { Image, Space, Typography } from "antd";
import { useAnimated } from "hooks";
import { useTranslation } from "next-i18next";

const { Title, Text } = Typography;

const exampleCard = [
  {
    id: 1,
    jobTitle: "Example",
    jobType: "Full-Time",
    jobLevel: "Middle",
    branch: "Da Nang",
  },
  {
    id: 2,
    jobTitle: "Example",
    jobType: "Full-Time",
    jobLevel: "Middle",
    branch: "Da Nang",
  },
  {
    id: 3,
    jobTitle: "Example",
    jobType: "Full-Time",
    jobLevel: "Middle",
    branch: "Da Nang",
  },
  {
    id: 4,
    jobTitle: "Example",
    jobType: "Full-Time",
    jobLevel: "Middle",
    branch: "Da Nang",
  },
  {
    id: 5,
    jobTitle: "Example",
    jobType: "Full-Time",
    jobLevel: "Middle",
    branch: "Da Nang",
  },
];

const LastestJobs = () => {
  const { t } = useTranslation();
  const { ref, animated } = useAnimated();

  const renderCardTitle = (jobTitle: string) => {
    return (
      <div className="cardtitle">
        <HotJarIcon color="orange" />
        <Text className="jobtitle">{jobTitle}</Text>
        <Text className="upto">Up to: 3000$</Text>
      </div>
    );
  };

  return (
    <div
      className="home-lastest-jobs"
      ref={ref}
      style={{ animation: animated ? "fadeToClear ease-in 1s" : undefined }}
    >
      <div className="title">
        <Title className="app-title">{t("common.txt_lastest_job")}</Title>
        <Image
          src="/images/graphic_js_coding.svg"
          alt="JS Coding"
          preview={false}
          className="image"
        />
      </div>
      <ul className="list">
        {exampleCard.map(({ id, jobTitle, jobType, jobLevel }) => {
          return (
            <AppCard key={id} cardTitle={renderCardTitle(jobTitle)} hoverable>
              <Space size={[0, 0]}>
                <AppTag color="green">{jobType}</AppTag>
                <AppTag color="orange">{jobLevel}</AppTag>
              </Space>
            </AppCard>
          );
        })}
        <div className="explores">
          <Space direction="vertical">
            <Title>{t("home.job.txt_explore_more")}</Title>
            <Space>
              <ExploreIcon color="green" />
              <ExploreIcon color="green" />
              <ExploreIcon color="green" />
            </Space>
          </Space>
        </div>
      </ul>
    </div>
  );
};

export default LastestJobs;
