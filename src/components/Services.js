import React from "react";
import ServicesPic from "../images/HeroImage.png";

function Services() {
  return (
    <div className="hidden md:flex w-4/6 flex flex-col mt-6">
      <img src={ServicesPic} className="mx-auto my-12" style={{ height: "100%", width: "80%" }} />
    </div>
  );
}

export default Services;
