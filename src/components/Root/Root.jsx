import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
<h1 className="text-3xl">From Root</h1>;
