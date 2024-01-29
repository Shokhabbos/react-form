import React from "react";

const CountryCard = ({ alt, name, capital, population, flag }) => {
  return (
    <div className="card bg-white shadow-md rounded max-w-64">
      <img src={flag} alt={alt} className="w-full h-60 object-cover" />
      <div className="card-content p-4">
        <h2 className="text-2xl font-semibold mb-3">{name}</h2>
        <p className="mb-3">Population:{population}</p>
        <p className="mb-3">Capital: {capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
