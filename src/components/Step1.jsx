import React from "react";
import InputField from "./InputField";

const Step1 = ({ formData, setFormData }) => {
  return (
    <>
      <InputField
        label="Login"
        name="login"
        value={formData.login}
        onChange={(e) => setFormData({ ...formData, login: e.target.value })}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />
    </>
  );
};

export default Step1;
