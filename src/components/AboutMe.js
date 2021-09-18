import React from "react";
import AboutMePic from "./../images/MyPhoto.jfif";

function AboutMe() {
  return (
    <div className="w-full h-auto text-3xl mt-10 px-10 md:px-20">
      <span className="flex justify-center md:justify-left">
        About <span className="font-bold ml-2">ME</span>
      </span>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="w-full h-40 mt-10">
          <div style={{ borderRadius: "50%" }} className="h-48 w-48 lg:h-80 lg:w-80 mx-auto">
            <img
              src={AboutMePic}
              alt="MyPic"
              className="w-full h-full object-cover object-left"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="flex flex-col text-lg mt-20 md:mt-16 lg:mt-28">
          <span className="text-2xl">Hello, I am</span>
          <span className="text-2xl font-semibold mt-2">Yatharth Verma</span>
          <span className="mt-2 text-sm">
            Currently, I am working as SDE in <b>LeadSquared, Bangalore</b>. I love web development.
            I did my graduation from <b>Lovely Professional University</b>
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutMe;
