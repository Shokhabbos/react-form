import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Web from "./pages/Services/Web.jsx";
import Mobile from "./pages/Services/Mobile.jsx";

//layout
import ServicesLayout from "./layouts/ServicesLayout.jsx";
import ProductLayout from "./layouts/ProductLayout.jsx";
import ProductDetails, {
  ProductDetailsLoader,
} from "./pages/Product/ProductDetails.jsx";
import Product, { ProductLoader } from "./pages/Product/Product.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<ServicesLayout />}>
        <Route path="web" element={<Web />} />
        <Route path="mobile" element={<Mobile />} />
      </Route>
      <Route path="product" element={<ProductLayout />}>
        <Route index element={<Product />} loader={ProductLoader} />
        <Route
          path=":name"
          element={<ProductDetails />}
          loader={ProductDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
