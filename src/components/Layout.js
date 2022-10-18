import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="font-rubik">
      <Navbar />
      <main className="xl:max-w-full 2xl:max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
