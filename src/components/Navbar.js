import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  return (
    <div className="flex px-10 md:px-20 pt-2 pb-2 sticky top-0 shadow bg-white z-20">
      <span style={{ color: "#0177FB" }} className=" mt-1 text-2xl lg:text-3xl  font-bold">
        <sup>My</sup>Portfolio
      </span>
      <div
        className="hidden w-full lg:flex justify-end space-x-10 opacity-70"
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
        className="flex justify-end w-full lg:hidden cursor-pointer w-auto ml-auto"
        onClick={() => setIsNavToggled(!isNavToggled)}
        style={{ width: "auto" }}
      >
        <i className="fas fa-bars text-custom-light-blue mt-3" style={{ fontSize: "22px" }}></i>
      </div>
      <div
        className={
          isNavToggled
            ? "absolute right-10 md:right-20 text-white top-16 p-4 space-y-4 block transition-all duration-300 ease-in-out rounded bg-blue-700 text-white text-sm p-10 shadow-2xl"
            : "absolute right-10 md:right-20 text-white top-16 p-4 space-y-4 hidden transition-all duration-300 ease-in-out"
        }
        style={{ background: "#3069e2" }}
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
