import React from "react";
import Intro from "./Intro";
import Services from "./Services";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center z-10">
      <img
        src="/heroBg.jpg"
        alt="hero-section-bg"
        className="flex absolute justify-center backdrop-filter backdrop-blur-xl bg-cover w-4/5 top-0"
        style={{ zIndex: "-1000" }}
      />
      <img
        src="/grid.webp"
        alt="grid"
        className="flex absolute justify-center backdrop-filter backdrop-blur-xl bg-cover w-full top-0"
        style={{ zIndex: "-999" }}
      />
      <Intro />
    </div>
  );
}

export default Home;
