import { Space, Typography } from "antd";
import { FC, useMemo } from "react";

import AppCard from "@components/AppCard";
import AppTag from "@components/AppTag";
import { JOB_LEVELS, JOB_TYPES } from "@constants/common";
import HotJarIcon from "@public/icons/HotJarIcon";
import AppButton from "@components/AppButton";
import Link from "next/link";

const { Text } = Typography;

const JobCard: FC<{
  jobItem: any;
  buttonViewDetail?: boolean;
  onClick?: any;
}> = ({ jobItem, buttonViewDetail, onClick }) => {
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
    <div className="job-card" onClick={onClick}>
      <AppCard cardTitle={renderJobTitle} hoverable>
        <Space size={[0, 0]}>
          <AppTag color="green">{JOB_TYPES[jobItem.typeOfJob].label}</AppTag>
          <AppTag color="orange">{JOB_LEVELS[jobItem.level].label}</AppTag>
          {buttonViewDetail && (
            <Link href={`/job-detail/${jobItem.id}`} target="_blank">
              <AppButton
                size="small"
                buttonTitle="View Detail"
                className="detail -bubble"
              />
            </Link>
          )}
        </Space>
      </AppCard>
    </div>
  );
};

export default JobCard;
