import React from "react";
import Intro from "./Intro";
import Services from "./Services";

function Home() {
  return (
    <div className="flex font-rubik">
      <Intro />
      <Services />
    </div>
  );
}

export default Home;
