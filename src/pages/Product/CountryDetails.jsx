import { useLoaderData } from "react-router-dom";
import { CountryCard } from "../../components";

const CountryDetails = () => {
  const countryList = useLoaderData();

  const country = countryList[0];

  return (
    <div className=" w-2/4  p-4 text-blue-500  transition duration-300 ease-in-out hover:shadow-lg">
      <CountryCard
        name={country.name.common}
        flag={country.flags.png}
        population={country.population}
        alt={country.flags.alt}
        capital={country.capital}
      />
    </div>
  );
};

export default CountryDetails;
