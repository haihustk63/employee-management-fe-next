import { FREQUENTLY_ASKED_QUESTIONS } from "@constants/common";
import { Collapse, Typography } from "antd";
import React from "react";

const { Panel } = Collapse;
const { Text, Title } = Typography;

const FrequentlyAskedQuestions = () => {
  return (
    <div className="home-frequently-asked-questions" id="home-faq">
      <Title className="app-title">FAQ.</Title>
      <Collapse className="collapse">
        {FREQUENTLY_ASKED_QUESTIONS.map((item) => (
          <Panel key={item.key} header={item.question} className="item">
            <Text className="text">{item.answer}</Text>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FrequentlyAskedQuestions;
