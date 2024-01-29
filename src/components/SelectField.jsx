import React from "react";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = true,
}) => {
  return (
    <label>
      {label}:
      <select
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
