import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  return (
    <div className="backdrop-filter backdrop-blur-lg bg-opacity-70 px-8 flex items-baseline py-2 sticky top-0 shadow bg-transparent z-20 text-white max-w-7xl mx-auto text-sm">
      <span className=" mt-1  font-medium flex">
        <span className="mr-1" style={{ color: "#5A69DE" }}>
          Yatharth
        </span>
        <span>V.</span>
      </span>
      <div
        className="hidden w-full lg:flex justify-end space-x-10 opacity-70 "
        style={{ lineHeight: "45px" }}
      >
        <li className="list-none cursor-pointer">
          <Link to="experience" smooth={true}>
            Experience
          </Link>
        </li>
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
        {isNavToggled ? (
          <></>
        ) : (
          <i className="fas fa-bars text-custom-light-blue mt-3" style={{ fontSize: "18px" }}></i>
        )}
      </div>
      <div
        className={
          isNavToggled
            ? "backdrop-filter backdrop-blur-lg bg-gray-900 bg-opacity-80 flex-col justify-center items-center absolute top-0   left-0 w-full h-auto text-white p-4 space-y-4 block transition-all duration-300 ease-in-out rounded text-sm shadow-2xl"
            : "hidden"
        }
      >
        <div className="flex justify-end w-full">
          <i
            className="fas fa-times text-custom-light-blue mt-3"
            style={{ fontSize: "18px" }}
            onClick={() => setIsNavToggled(!isNavToggled)}
          ></i>
        </div>
        <div className="flex justify-center">
          <ul className="leading-10 text-center">
            <li className="list-none cursor-pointer">
              <Link to="experience" onClick={() => setIsNavToggled(!isNavToggled)}>
                Experience
              </Link>
            </li>
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
              <Link to="contactMe" onClick={() => setIsNavToggled(!isNavToggled)}>
                {" "}
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
