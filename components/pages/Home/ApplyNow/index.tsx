import { Typography } from "antd";

import ApplyNowForm from "@components/ApplyNowForm";

const { Title, Text } = Typography;

const ApplyNow = () => {
  return (
    <div className="home-apply-now">
      <div className="home-apply-now__content">
        <Title>We are waiting for you!</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
          malesuada leo, vel ornare erat. Suspendisse rutrum, enim eget gravida
          tincidunt, mi quam aliquam augue, et pharetra sem tortor eu odio.
          Quisque in ante mattis risus sagittis consequat. Mauris eleifend,
          ligula id laoreet pellentesque, leo velit pulvinar enim, vel luctus
          urna risus non magna. Mauris vestibulum bibendum lacinia. Cras semper
          auctor ipsum in fermentum. Integer sodales mattis risus. Curabitur
          ultrices lectus nec erat porta, ut mollis elit egestas. Nullam justo
          nibh, congue vel pretium at, feugiat sed lacus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Morbi interdum tortor magna, eu aliquam magna euismod vel.
          Proin lacinia risus libero, vel laoreet ligula consectetur sit amet.
          Donec dignissim elementum lorem eget aliquam. Vivamus sit amet
          volutpat ante.
        </Text>
      </div>
      <ApplyNowForm />
    </div>
  );
};

export default ApplyNow;
