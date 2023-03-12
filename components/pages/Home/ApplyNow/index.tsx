import { Typography } from "antd";

import ApplyNowForm from "@components/ApplyNowForm";
import { useAnimated } from "hooks";
import { useContext } from "react";
import { HomeContext } from "pages";

const { Title, Text } = Typography;

const ApplyNow = () => {
  const { ref, animated } = useAnimated();
  const { handleToggleModal, jobListFull, submitApplyForm } = useContext(
    HomeContext
  ) as any;

  return (
    <div
      className="home-apply-now"
      id="home-apply-now"
      ref={ref}
      style={{
        animation: animated ? "fadeToClear ease-in 1s" : undefined,
      }}
    >
      <div className="home-apply-now__content">
        <Title>We are waiting for you!</Title>
        <Text>
          Sometimes waiting for the next opportunity can cause stress. Waiting
          does not means just sitting and doing nothing. You should be
          remembering the accomplishments that have allowed you to look at the
          new opportunity. Remember how frighten you were of the unknown and not
          knowing the right next step. For example, graduating from high school,
          not knowing whether the next move was a job, college or the military.
          As you go forward in your life journey, this waiting thing will be
          with you as a reminder that your aspirations have merit. I wait with
          anticipation that what I have already accomplished in my personal and
          business life has lead me to many new opportunities. Waiting is
          stressful only if you forget that you have already done the hard work
          before opportunity showed up. Only by waiting can you grasp the
          importance of always breaking new ground. Forget the old barriers
          like; you will never have enough money, you are too old to do that,
          its never been done like that before, etc. My favorite waiting stress
          moment is &quot;Now is not the right time for your to start.&quot;
        </Text>
      </div>
      <ApplyNowForm
        handleToggleModal={handleToggleModal}
        jobListFull={jobListFull}
        submitApplyForm={submitApplyForm}
      />
    </div>
  );
};

export default ApplyNow;
