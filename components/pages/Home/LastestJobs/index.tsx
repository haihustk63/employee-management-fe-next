import AppCard from "@components/AppCard";
import { Space, Typography } from "antd";
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

  return (
    <div className="home-lastest-jobs">
      <Title className="app-title">{t("common.txt_lastest_job")}</Title>
      <ul className="home-lastest-jobs__list">
        {exampleCard.map(({ id, jobTitle, jobType, jobLevel, branch }) => {
          return (
            <AppCard key={id} cardTitle={jobTitle} hoverable>
              <Space direction="vertical">
                <Text>
                  {jobType} - {jobLevel}
                </Text>
                <Text>{branch}</Text>
              </Space>
            </AppCard>
          );
        })}
        <div className="home-lastest-jobs__explores">
          <Space direction="vertical">
            <Title>{t("home.job.txt_explore_more")}</Title>
            <Text>----</Text>
          </Space>
        </div>
      </ul>
    </div>
  );
};

export default LastestJobs;
