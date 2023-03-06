import { useTranslation } from "next-i18next";
import { Image, Space, Typography } from "antd";
import Link from "next/link";

import ExploreIcon from "@public/icons/ExploreIcon";
import { useAnimated } from "hooks";
import JobCard from "./JobCard/index";
import { FC, useContext } from "react";
import { HomeContext } from "pages";

const { Title } = Typography;

const LastestJobs: FC = () => {
  const { t } = useTranslation() as any;
  const { jobList = [] } = useContext(HomeContext) as any;
  const { ref, animated } = useAnimated();

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
          loading="lazy"
        />
      </div>
      <div className="list">
        {jobList.map((jobItem: any) => {
          return <JobCard key={jobItem.id} jobItem={jobItem} />;
        })}
        <Link className="link" href="/jobs">
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
        </Link>
      </div>
    </div>
  );
};

export default LastestJobs;
