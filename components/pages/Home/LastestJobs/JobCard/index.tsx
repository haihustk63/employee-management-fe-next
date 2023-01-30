import { Space, Typography } from "antd";
import { FC, useMemo } from "react";

import AppCard from "@components/AppCard";
import AppTag from "@components/AppTag";
import { JOB_LEVELS, JOB_TYPES } from "@constants/common";
import HotJarIcon from "@public/icons/HotJarIcon";

const { Title, Text } = Typography;

const JobCard: FC<{ jobItem: any }> = ({ jobItem }) => {
  const renderJobTitle = useMemo(() => {
    return (
      <div className="cardtitle">
        <div className="name">
          <HotJarIcon color="orange" />
          <Text className="jobtitle">{jobItem.title}</Text>
        </div>
        <Text className="upto">Up to: {jobItem.upTo}$</Text>
      </div>
    );
  }, [jobItem]);

  return (
    <div className="job-card">
      <AppCard cardTitle={renderJobTitle} hoverable>
        <Space size={[0, 0]}>
          <AppTag color="green">{JOB_TYPES[jobItem.typeOfJob].label}</AppTag>
          <AppTag color="orange">{JOB_LEVELS[jobItem.level].label}</AppTag>
        </Space>
      </AppCard>
    </div>
  );
};

export default JobCard;
