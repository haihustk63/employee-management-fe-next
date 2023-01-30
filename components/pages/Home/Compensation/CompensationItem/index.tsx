import React, { FC } from "react";
import { Typography } from "antd";

import StarIcon from "@public/icons/StarIcon";

const { Text, Title } = Typography;

const CompensationItem: FC<{ item: any }> = ({ item }) => {
  return (
    <div className="compensation-item">
      <div className="content">
        <Title className="title" level={3}>
          {item.title}
        </Title>
        <Text className="description">{item.content}</Text>
      </div>
      <StarIcon color="white" />
    </div>
  );
};

export default CompensationItem;
