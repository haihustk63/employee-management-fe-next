import { COMPENSATION_ITEMS } from "@constants/common";
import React from "react";
import { Typography } from "antd";
const { Text, Title } = Typography;
import CompensationItem from "./CompensationItem";

const Compensation = () => {
  return (
    <div className="home-compensation" id="home-compensation">
      <Title className="app-title">We offer you</Title>
      <div className="items">
        {COMPENSATION_ITEMS.map((item) => (
          <CompensationItem key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Compensation;
