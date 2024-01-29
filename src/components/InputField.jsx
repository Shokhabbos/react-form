import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = true,
  disabled = false,
}) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
        required={required}
      />
    </label>
  );
};

export default InputField;
