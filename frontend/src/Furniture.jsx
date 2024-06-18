import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./home/Home";
import Footer from "./footer/Footer";
export default function Furniture() {
  return (
    <div>
      <Home />
      <Outlet />
      <Footer/>
    </div>
  );
}
