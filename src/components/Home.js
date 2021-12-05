import React from "react";
import Intro from "./Intro";
import Services from "./Services";

function Home() {
  return (
    <div className="flex flex-col md:flex-row font-rubik pb-10 items-center justify-center">
      <Intro />
      <Services />
    </div>
  );
}

export default Home;
