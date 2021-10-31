import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  return (
    <div className="flex px-10 md:px-20 pt-2 pb-2 sticky top-0 shadow bg-white z-20">
      <span style={{ color: "#648DE5" }} className=" mt-1 text-3xl font-bold">
        <sup style={{ fontSize: "18px" }}>My</sup>Portfolio
      </span>
      <div
        className="hidden w-full lg:flex justify-end space-x-10 text-custom-light-blue"
        style={{ lineHeight: "45px" }}
      >
        <li className="list-none cursor-pointer">
          <Link to="skills" smooth={true}>
            Skills
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="aboutMe" smooth={true}>
            About me
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="myProjects" smooth={true}>
            Projects
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="myPublishedVideos" smooth={true}>
            Videos
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="myIllustrations" smooth={true}>
            Illustrations
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="contactMe" smooth={true}>
            Contact Me
          </Link>
        </li>
        {/* <li className="list-none cursor-pointer"><Link to="">Contact me</li> */}
      </div>
      <div
        className="flex justify-end w-full lg:hidden cursor-pointer"
        onClick={() => setIsNavToggled(!isNavToggled)}
      >
        <i className="fas fa-bars text-custom-light-blue mt-3" style={{ fontSize: "22px" }}></i>
      </div>
      <div
        className={
          isNavToggled
            ? "absolute right-10 text-white top-20 p-4 space-y-4 block transition-all duration-300 ease-in-out"
            : "absolute right-10 text-white top-20 p-4 space-y-4 hidden transition-all duration-300 ease-in-out"
        }
        style={{ background: "#3f72de" }}
      >
        <li className="list-none cursor-pointer">
          <Link to="skills" onClick={() => setIsNavToggled(!isNavToggled)}>
            Skills
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="aboutMe" onClick={() => setIsNavToggled(!isNavToggled)}>
            About me
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="myProjects" onClick={() => setIsNavToggled(!isNavToggled)}>
            Projects
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="myPublishedVideos" onClick={() => setIsNavToggled(!isNavToggled)}>
            Videos
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="myIllustrations" onClick={() => setIsNavToggled(!isNavToggled)}>
            {" "}
            Illustrations
          </Link>
        </li>
        <li className="list-none cursor-pointer">
          <Link to="contactMe" onClick={() => setIsNavToggled(!isNavToggled)}>
            {" "}
            Contact Me
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
