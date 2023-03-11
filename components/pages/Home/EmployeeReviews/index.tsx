import { Carousel } from "antd";
import { FC } from "react";

import CardReview from "@components/pages/Home/EmployeeReviews/CardReview";

const listReviews = [
  {
    imageUrl: "/images/avatar1.avif",
    imageAlt: "txt_alt_profile_image",
    authorName: "Mr. Hai Pham",
    authorPosition: "Division Manager",
    authorReview:
      "Our company strives to make everyone feels included and a part of the company.",
    bgColor: "green",
  },
  {
    imageUrl: "/images/avatar2.avif",
    imageAlt: "txt_alt_profile_image",
    authorName: "Mrs. Thanh Thanh",
    authorPosition: "Admin",
    authorReview:
      "It feels like we're all making small, incremental steps every day. And when we look back at it, we've already achieved so much.",
    bgColor: "green",
  },
  {
    imageUrl: "/images/avatar3.avif",
    imageAlt: "txt_alt_profile_image",
    authorName: "Mr. Thanh Cong",
    authorPosition: "Division Manager",
    authorReview:
      "It's like everyone shares the same goal, the same passion. Our company is like a home where I feel comfortable sharing my thoughts.",
    bgColor: "green",
  },
  {
    imageUrl: "/images/avatar4.webp",
    imageAlt: "txt_alt_profile_image",
    authorName: "Mrs. Thanh Nga",
    authorPosition: "Employee",
    authorReview:
      "I love how everyone always tries to help out in whatever way they can. The people of our company are just the friendliest bunch of people I've met",
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
