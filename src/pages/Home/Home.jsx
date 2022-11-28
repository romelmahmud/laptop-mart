import React from "react";
import AdvertiseSection from "./components/AdvertiseSection/AdvertiseSection";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import HowItWorks from "./components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      <Banner />
      <AdvertiseSection />
      <Categories />
      <HowItWorks />
    </>
  );
};

export default Home;
