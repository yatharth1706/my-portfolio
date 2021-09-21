import React from "react";
import CatIll from "../images/CatIll.jpg";
import LandscapeIll from "../images/LandscapeIll.jpg";
import WolfIll from "../images/WolfIll.jpg";
import PenguinIll from "../images/PenguinIll.jpg";
import { Element } from "react-scroll";

function MyIllustrations() {
  return (
    <Element name="myIllustrations">
      <div
        className="text-white w-full h-auto px-10 md:px-20 flex flex-col py-10"
        style={{
          background: "#3F72DE",
        }}
      >
        <span className="text-3xl">My Illustrations</span>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 mt-6 ">
          <div className="w-full h-80 p-1">
            <img
              src={PenguinIll}
              alt="Illustration pic"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="w-full h-80 p-1">
            <img
              src={LandscapeIll}
              alt="Illustration pic"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="w-full h-80 p-1">
            <img
              src={CatIll}
              alt="Illustration pic"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="w-full h-80 p-1">
            <img
              src={WolfIll}
              alt="Illustration pic"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default MyIllustrations;
