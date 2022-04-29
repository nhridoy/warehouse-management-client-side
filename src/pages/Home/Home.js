import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import HomeProducts from "../../components/HomeProducts/HomeProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <HomeProducts />
    </div>
  );
};

export default Home;
