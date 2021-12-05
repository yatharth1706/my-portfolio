import React from "react";
import ServicesPic from "../images/HeroImage.png";
import Lottie from "lottie-react-web";
import animation from "../lottieJsons/animation.json";

function Services() {
  return (
    <div className="md:flex w-4/6 flex flex-col mt-0 ">
      {/* <img src={ServicesPic} className="mx-auto my-12" style={{ height: "100%", width: "80%" }} /> */}
      <Lottie
        options={{
          animationData: animation,
        }}
      />
    </div>
  );
}

export default Services;
