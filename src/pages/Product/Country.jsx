import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CountryCard } from "../../components";

const Country = () => {
  const products = useLoaderData();

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((country) => (
          <Link to={country.name.common} key={country.cca3}>
            <CountryCard
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              alt={country.flags.alt}
              capital={country.capital}
              className="rounded-md border p-4 shadow-md transition duration-300 ease-in-out hover:shadow-lg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Country;
