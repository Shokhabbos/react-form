import React from "react";
import { Outlet } from "react-router-dom";

const CountryLayout = () => {
  return (
    <section className="rounded-md bg-white p-6 ">
      <Outlet />
    </section>
  );
};

export default CountryLayout;
