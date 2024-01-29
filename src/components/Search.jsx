import React from "react";

const Search = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center justify-between border w-[450px] shadow-md">
        <label htmlFor="searchInput">
          <i className="fa-solid fa-magnifying-glass p-3"></i>
        </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search for a country..."
          className="px-4 py-2  w-full outline-none block"
        />
      </div>
      <select
        name="counrties"
        id="counrties"
        className="py-3 text-xl w-80 border"
      >
        <option value="all" defaultValue disabled>
          Filter By Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="America">America</option>
        <option value="Europe">Europe</option>
      </select>
    </section>
  );
};

export default Search;
