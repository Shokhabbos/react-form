const CountryCard = ({ alt, name, capital, population, flag }) => {
  return (
    <div className="card max-w-64 rounded bg-white shadow-md">
      <img src={flag} alt={alt} className="h-60  object-cover" />
      <div className="card-content p-4">
        <h2 className="mb-3 text-2xl font-semibold">{name}</h2>
        <p className="mb-3">Population:{population}</p>
        <p className="mb-3">Capital: {capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
