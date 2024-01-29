import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <div className="container mx-auto mt-8 p-6 bg-gray-200 rounded-md">
      <nav className="flex space-x-4 mb-4">
        <NavLink
          to="web"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Web Development
        </NavLink>
        <NavLink
          to="mobile"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Mobile Development
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default ServicesLayout;
