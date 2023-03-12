import { Image, Typography } from "antd";
import { FC } from "react";

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
      style={{ backgroundColor: `var(--color-secondary-${bgColor})` }}
    >
      <div className="image">
        <Image src={imageUrl} alt={imageAlt} preview={false} loading="lazy" />
      </div>

      <div className="content">
        <Text className="name">{authorName}</Text>
        <Text>{authorPosition}</Text>
        <Text className="comment">&ldquo;{authorReview}&rdquo;</Text>
      </div>
    </div>
  );
};

export default CardReview;
