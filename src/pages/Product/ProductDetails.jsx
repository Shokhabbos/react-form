import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import { CountryCard } from "../../components";

const ProductDetails = () => {
  const countryList = useLoaderData();

  const country = countryList[0];

  return (
    <div>
      <CountryCard
        name={country.name.common}
        flag={country.flags.png}
        population={country.population}
        alt={country.flags.alt}
        capital={country.capital}
        className="border p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default ProductDetails;

export const ProductDetailsLoader = async ({ params }) => {
  const { name } = params;
  const res = await fetch(`${BASE_URL}name/` + name);
  if (!res.ok) return new Error("Could not fetch Products Details");

  return res.json();
};
