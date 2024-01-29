import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-between space-x-4 text-white">
          <li>
            <NavLink to="/" className="text-lg font-semibold hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-lg font-semibold hover:underline"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-lg font-semibold hover:underline"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="text-lg font-semibold hover:underline"
            >
              Product
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
