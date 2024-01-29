import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const Step3 = ({ formData, setFormData }) => {
  return (
    <>
      <InputField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        required
      />
      <InputField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        required
      />
      <InputField
        label="Middle Name"
        name="middleName"
        value={formData.middleName}
        onChange={(e) =>
          setFormData({ ...formData, middleName: e.target.value })
        }
      />
      <InputField
        label="Birthdate"
        name="birthdate"
        type="date"
        value={formData.birthdate}
        onChange={(e) =>
          setFormData({ ...formData, birthdate: e.target.value })
        }
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <SelectField
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        options={[
          { label: "Select", value: "" },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        required
      />
      <label>
        Are you older than 18?
        <input
          type="checkbox"
          name="isOlderThan18"
          checked={formData.isOlderThan18}
          onChange={(e) =>
            setFormData({ ...formData, isOlderThan18: e.target.checked })
          }
          className="mr-2"
          required
        />
        Yes
      </label>
    </>
  );
};

export default Step3;
