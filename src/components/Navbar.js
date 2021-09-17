import React from "react";

function Navbar() {
  return (
    <div className="flex pl-20 pt-5">
      <span style={{ color: "#648DE5", fontSize: "40px", fontWeight: "bold" }}>
        <sup style={{ fontSize: "20px" }}>My</sup>Portfolio
      </span>
      <div className="w-full flex justify-end pr-20 space-x-10 pt-5 text-custom-light-blue">
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
