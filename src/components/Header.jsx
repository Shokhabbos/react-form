// Header.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  return (
    <nav className="p-4 container mx-auto">
      <ul className="flex justify-between space-x-3 text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
      <Breadcrumbs />
    </nav>
  );
};

export default Header;
