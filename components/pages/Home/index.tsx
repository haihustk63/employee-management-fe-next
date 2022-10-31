import ApplyNow from "./ApplyNow";
import Awards from "./Awards";
import Banner from "./Banner";
import CustomerReviews from "./CustomerReviews";
import News from "./News";
import Solutions from "./Solutions";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Solutions />
      <Awards />
      <CustomerReviews />
      <ApplyNow />
      <News />
    </>
  );
};

export default HomePage;
