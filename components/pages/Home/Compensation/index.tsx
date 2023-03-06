import { COMPENSATION_ITEMS } from "@constants/common";
import { Typography } from "antd";
import CompensationItem from "./CompensationItem";
const { Text, Title } = Typography;

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
