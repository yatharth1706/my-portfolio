import React from "react";
import AboutMePic from "./../images/MyPic.png";
import { Element } from "react-scroll";

function AboutMe() {
  return (
    <Element name="aboutMe">
      <div className="mb-6 sm:mb-44 text-gray-300 w-full h-auto text-2xl  text-center md:text-left py-20">
        <span className="flex justify-center md:justify-left">
          About <span className="font-semibold ml-2">ME</span>
        </span>
        <div className="flex flex-col justify-center md:flex-row h-auto">
          <div className="w-full h-auto mt-10">
            <div style={{ borderRadius: "50%" }} className="h-48 w-48 lg:h-80 lg:w-80 mx-auto">
              <img src={AboutMePic} alt="MyPic" width="80%" />
            </div>
          </div>
          <div className="flex flex-col text-lg mt-10 md:mt-16 lg:mt-28">
            <span className="text-sm text-gray-300">Hello, I am</span>
            <span className="text-2xl font-semibold mt-2 text-blue-500">Yatharth Verma</span>
            <span className="mt-2 text-sm text-gray-300 leading-relaxed">
              I am based from Punjab. I am currently working as a Software Engineer at LeadSquared.
              Have around 2+ years of experience. Have expertise in both frontend and backend
              technologies. Believe in hard work and passionate about open source. Love learning new
              stuff every day.
            </span>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default AboutMe;
