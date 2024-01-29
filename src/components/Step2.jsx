import React from "react";
import SelectField from "./SelectField";

const Step2 = ({ formData, setFormData }) => {
  const subscriptionOptions = [
    { label: "Choose an option", value: "" },
    { label: "Free", value: "free" },
    { label: "Monthly", value: "monthly" },
    { label: "Yearly", value: "yearly" },
  ];

  return (
    <>
      <SelectField
        label="Subscription Type"
        name="subscriptionType"
        value={formData.subscriptionType}
        onChange={(e) =>
          setFormData({ ...formData, subscriptionType: e.target.value })
        }
        options={subscriptionOptions}
      />
    </>
  );
};

export default Step2;
