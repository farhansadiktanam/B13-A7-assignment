import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/homepage/Banner";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* DYnamic parts here */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
