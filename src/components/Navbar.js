import React, { useState } from "react";

function Navbar() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  return (
    <div className="flex px-10 md:px-20 pt-6">
      <span style={{ color: "#648DE5" }} className="text-4xl font-bold">
        <sup style={{ fontSize: "20px" }}>My</sup>Portfolio
      </span>
      <div
        className="hidden w-full lg:flex justify-end space-x-10 text-custom-light-blue"
        style={{ lineHeight: "45px" }}
      >
        <li className="list-none">Skills</li>
        <li className="list-none">About me</li>
        <li className="list-none">Projects</li>
        <li className="list-none">Videos</li>
        <li className="list-none">Illustrations</li>
        <li className="list-none">Contact me</li>
      </div>
      <div
        className="flex justify-end w-full lg:hidden cursor-pointer"
        onClick={() => setIsNavToggled(!isNavToggled)}
      >
        <i className="fas fa-bars text-custom-light-blue" style={{ fontSize: "30px" }}></i>
      </div>
      <div
        className={
          isNavToggled
            ? "absolute right-10 text-white top-20 p-4 space-y-4 block transition-all duration-300 ease-in-out"
            : "absolute right-10 text-white top-20 p-4 space-y-4 hidden transition-all duration-300 ease-in-out"
        }
        style={{ background: "#3f72de" }}
      >
        <li className="list-none">Skills</li>
        <li className="list-none">About me</li>
        <li className="list-none">Projects</li>
        <li className="list-none">Videos</li>
        <li className="list-none">Illustrations</li>
        <li className="list-none">Contact me</li>
      </div>
    </div>
  );
}

export default Navbar;
