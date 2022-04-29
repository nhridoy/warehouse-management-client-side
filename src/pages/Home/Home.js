import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Counter from "../../components/Counter/Counter";
import HomeProducts from "../../components/HomeProducts/HomeProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <HomeProducts />
      <Counter />
    </div>
  );
};

export default Home;
