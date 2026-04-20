import React from "react";
import { Link, NavLink } from "react-router";
import { IoHome } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="bg-base-200 shadow-sm ">
      <nav className="navbar container mx-auto ">
        <div className="flex-1 min-w-sm">
          <h2 className="font-semibold text-3xl">
            Keen<span className="text-[#244D3F] ">Keeper</span>
          </h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-3 px-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `font-semibold btn  ${isActive && "bg-[#244D3F] text-white "}`
              }
            >
              <IoHome />
              Home
            </NavLink>
            <NavLink
              to={"/timeline"}
              className={({ isActive }) =>
                `font-semibold btn ${isActive && "bg-[#244D3F] text-white "}`
              }
            >
              <RiTimeLine />
              Timeline
            </NavLink>
            <NavLink
              to={"/stats"}
              className={({ isActive }) =>
                `font-semibold btn  ${isActive ? "bg-[#244D3F] text-white " : ""}`
              }
            >
              <ImStatsDots />
              Stats
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
