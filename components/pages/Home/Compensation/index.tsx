import { COMPENSATION_ITEMS } from "@constants/common";
import React from "react";
import CompensationItem from "./CompensationItem";

const Compensation = () => {
  return (
    <div className="home-compensation">
      {COMPENSATION_ITEMS.map((item) => (
        <CompensationItem key={item.key} item={item} />
      ))}
    </div>
  );
};

export default Compensation;
