import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="font-rubik">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
