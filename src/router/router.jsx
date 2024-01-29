import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";

//layouts
import { ServicesLayout, CountryLayout } from "../layouts";

//pages
import {
  About,
  Home,
  Mobile,
  Product,
  Web,
  ProductDetails,
  NotFound,
} from "../pages";

//loaders
import { CountryDetailsLoader, CountryLoader } from "../utils/routerLoaders";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<ServicesLayout />}>
        <Route path="web" element={<Web />} />
        <Route path="mobile" element={<Mobile />} />
      </Route>
      <Route path="product" element={<CountryLayout />}>
        <Route index element={<Product />} loader={CountryLoader} />
        <Route
          path=":name"
          element={<ProductDetails />}
          loader={CountryDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
