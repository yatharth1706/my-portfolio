import React from "react";
import Intro from "./Intro";
import Services from "./Services";

function Home() {
  return (
    <div
      className="flex flex-col md:flex-row  pb-10 items-center justify-center"
      style={{ background: "url('GlassMorph1.png')", objectFit: "cover" }}
    >
      <Intro />
    </div>
  );
}

export default Home;
