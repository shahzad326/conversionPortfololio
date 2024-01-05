import React from "react";
import FrontPage from "./FrontPage";
import Projects from "./projects/Projects";
import Featured from "./featured/Featured";
import About from "./About";

import Screen2 from "./screen/Screen2";
import Screen3 from "./screen/Screen3";
import Screen from "./screen/Screen";
import Description from "./description/Description";
import Footer from "../footer/Footer";

const Container = () => {
  return (
    <div>
      <FrontPage />
      <About />
      <Description />
      <Featured />
      <Screen />
      <Screen2 />
      <Screen3 />
      <Projects />
      <Footer />
    </div>
  );
};

export default Container;
