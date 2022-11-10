import ApplyNow from "./ApplyNow";
import LastestJobs from "./LastestJobs";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Search from "./Search";
import EmployeeReviews from "./EmployeeReviews";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="home-page__wrap">
        <Search />
        <LastestJobs />
        <AboutUs />
        <EmployeeReviews />
        <ApplyNow />
      </div>
    </>
  );
};

export default HomePage;
