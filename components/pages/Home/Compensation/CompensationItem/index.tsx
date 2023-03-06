import { Typography } from "antd";
import { FC } from "react";

import StarIcon from "@public/icons/StarIcon";

const { Text, Title } = Typography;

const CompensationItem: FC<{ item: any }> = ({ item }) => {
  return (
    <div className="compensation-item">
      <div className="content">
        <Text className="title" style={{ fontSize: "2.4rem", display: "block" }}>
          {item.title}
        </Text>
        <Text className="description">{item.content}</Text>
      </div>
      <StarIcon color="white" />
    </div>
  );
};

export default CompensationItem;
