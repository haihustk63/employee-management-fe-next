import { FC } from "react";
import { Image, Typography } from "antd";

import { ICardReviewProps } from "./interface";

const { Title, Text } = Typography;

const CardReview: FC<ICardReviewProps> = ({
  imageUrl,
  imageAlt,
  authorName,
  authorReview,
  authorPosition,
  bgColor,
}) => {
  return (
    <div
      className="card-review"
      style={{ backgroundColor: `var(--color-primary-${bgColor})` }}
    >
      <div className="image">
        <Image src={imageUrl} alt={imageAlt} />
      </div>

      <div className="content">
        <Title>{authorName}</Title>
        <Title level={5}>{authorPosition}</Title>
        <Title level={4}>{authorReview}</Title>
      </div>
    </div>
  );
};

export default CardReview;
