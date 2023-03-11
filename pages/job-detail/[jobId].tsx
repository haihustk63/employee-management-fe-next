import { GetServerSideProps } from "next";
import { Typography } from "antd";
import { withServerSideProps } from "hoc/withServerSideProps";
import { jobService } from "services/jobs";
import AppTag from "@components/AppTag";
import { JOB_LEVELS, JOB_TYPES } from "@constants/common";
import dynamic from "next/dynamic";

const RenderJobContent = dynamic(
  import("@components/pages/JobDetail/RenderJobContent"),
  {
    ssr: false,
    loading: () => <span>loading...</span>,
  }
);

const { Title } = Typography;

const JobDetail = ({ jobInfo }: any) => {
  const { typeOfJob, level, title, position, jobDetail } = jobInfo;
  return (
    <div className="job-detail">
      <Title>{title}</Title>
      <div className="tags">
        <AppTag color={JOB_TYPES[typeOfJob].color as string}>
          {JOB_TYPES[typeOfJob].label}
        </AppTag>
        <AppTag color={JOB_LEVELS[level].color as string}>
          {JOB_LEVELS[level].label}
        </AppTag>
        <AppTag color="blue">{position.name}</AppTag>
      </div>

      <RenderJobContent htmlContent={jobDetail} />
    </div>
  );
};

export default JobDetail;

export const getServerSideProps: GetServerSideProps = withServerSideProps(
  async ({ params }: any) => {
    try {
      const { jobId } = params;
      const jobInfo = await jobService.getJobById(jobId);
      if (!jobInfo) {
        return {
          notFound: true,
        };
      }
      return { jobInfo };
    } catch (err) {
      console.error(err);
    }
  }
);
