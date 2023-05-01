import React from "react";
import Intro from "./Intro";
import Services from "./Services";

function Home() {
  return (
    <div className="flex flex-col md:flex-row  pb-10 items-center justify-center">
      <img src="/GlassMorph1.png" alt="hero-section-bg" className="absolute" />
      <Intro />
    </div>
  );
}

export default Home;
