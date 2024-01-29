import React from "react";
import { BASE_URL } from "../../constants/constants";
import { Link, useLoaderData } from "react-router-dom";
import { CountryCard } from "../../components";

const Product = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((country) => (
          <Link to={country.name.common} key={country.cca3}>
            <CountryCard
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              alt={country.flags.alt}
              capital={country.capital}
              className="border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;

export const ProductLoader = async () => {
  const res = await fetch(`${BASE_URL}/all`);
  if (!res.ok) throw new Error("Could not fetch Products");
  return res.json();
};
