import { purityContent } from "utils";

const RenderHtml = ({ htmlContent }: any) => {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: purityContent(htmlContent) }}
    ></span>
  );
};

export default RenderHtml;
