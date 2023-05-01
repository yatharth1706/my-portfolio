import React from "react";
import AboutMePic from "./../images/MyPhoto.jfif";
import { Element } from "react-scroll";

function AboutMe() {
  return (
    <Element name="aboutMe">
      <div className="text-gray-300 w-full h-auto text-2xl sm:mt-10 text-center md:text-left py-8">
        <span className="flex justify-center md:justify-left">
          About <span className="font-semibold ml-2">ME</span>
        </span>
        <div className="flex flex-col justify-center md:flex-row h-auto">
          <div className="w-full h-auto mt-10">
            <div style={{ borderRadius: "50%" }} className="h-48 w-48 lg:h-80 lg:w-80 mx-auto">
              <img
                src={AboutMePic}
                alt="MyPic"
                className="w-full h-full object-cover object-left"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className="flex flex-col text-lg mt-10 md:mt-16 lg:mt-28">
            <span className="text-sm text-gray-300">Hello, I am</span>
            <span className="text-2xl font-semibold mt-2 text-blue-500">Yatharth Verma</span>
            <span className="mt-2 text-sm text-gray-300">
              Currently, I am working as SDE in <b>LeadSquared, Bangalore</b>. I love web
              development. I did my graduation from <b>Lovely Professional University</b>
            </span>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default AboutMe;
