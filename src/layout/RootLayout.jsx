import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

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
