import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "ViDStore",
  };
  return (
    <div>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
