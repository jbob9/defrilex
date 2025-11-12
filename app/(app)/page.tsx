import AccountSection from "./account-section";
import Banner from "./banner";
import FacilitySection from "./facility-section";
import HowWorkSection from "./how-work-section";
import WhyChooseSection from "./why-choose-section";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowWorkSection />
      <AccountSection />
      <FacilitySection />
      <WhyChooseSection />
    </div>
  );
};

export default Home;
