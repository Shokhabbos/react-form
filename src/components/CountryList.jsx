import { useEffect, useState } from "react";

import { fetchData } from "../utils/fetchData";

import CountryCard from "./CountryCard";

const CountryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchData().then((counrties) => {
      setLoading(false);
      setData(counrties);
    });
  }, []);
  return (
    <section className="grid grid-cols-4 mt-5 rounded gap-8">
      {loading ? (
        <h1 className="text-2xl">Loading...</h1>
      ) : (
        data?.map((country) => (
          <CountryCard
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            alt={country.flags.alt}
            capital={country.capital}
          />
        ))
      )}
    </section>
  );
};

export default CountryList;
