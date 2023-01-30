import { FC } from "react";
import { Carousel } from "antd";
import { Typography } from "antd";

import CardReview from "@components/pages/Home/EmployeeReviews/CardReview";

const { Text } = Typography;

const listReviews = [
  {
    imageUrl: "/images/example_profile.svg",
    imageAlt: "txt_alt_profile_image",
    authorName: "Example 1",
    authorPosition: "Example",
    authorReview:
      "Discover new illustrations every week. Use them on your landing pages, blog posts, newsletters, social media graphics and more!",
    bgColor: "green",
  },
  {
    imageUrl: "/images/example_profile.svg",
    imageAlt: "txt_alt_profile_image",
    authorName: "Example 2",
    authorPosition: "Example",
    authorReview:
      "Discover new illustrations every week. Use them on your landing pages, blog posts, newsletters, social media graphics and more!",
    bgColor: "green",
  },
  {
    imageUrl: "/images/example_profile.svg",
    imageAlt: "txt_alt_profile_image",
    authorName: "Example 3",
    authorPosition: "Example",
    authorReview:
      "Discover new illustrations every week. Use them on your landing pages, blog posts, newsletters, social media graphics and more!",
    bgColor: "green",
  },
  {
    imageUrl: "/images/example_profile.svg",
    imageAlt: "txt_alt_profile_image",
    authorName: "Example 4",
    authorPosition: "Example",
    authorReview:
      "Discover new illustrations every week. Use them on your landing pages, blog posts, newsletters, social media graphics and more!",
    bgColor: "green",
  },
];

const EmployeeReviews: FC = () => {
  return (
    <div className="home-employee-review">
      <Carousel className="list" autoplay>
        {listReviews.map((review) => {
          return <CardReview key={Math.random().toString()} {...review} />;
        })}
      </Carousel>
    </div>
  );
};

export default EmployeeReviews;
