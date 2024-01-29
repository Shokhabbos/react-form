import React from "react";
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div>
      <h1>Mac</h1>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default ProductLayout;
