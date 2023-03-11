import { purityContent } from "utils";

const RenderJobContent = ({ htmlContent }: any) => {
  return (
    <div
      className="job-content"
      dangerouslySetInnerHTML={{ __html: purityContent(htmlContent) }}
    ></div>
  );
};

export default RenderJobContent;
