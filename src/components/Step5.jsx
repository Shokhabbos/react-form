import React from "react";
import InputField from "./InputField";

const Step5 = ({ formData, setFormData }) => {
  return (
    <>
      <h2>Step 5 - Consent to Personal Data Processing</h2>
      <InputField label="Login" name="login" value={formData.login} disabled />
      <InputField
        label="Password"
        name="password"
        value={formData.password}
        disabled
        type="password"
      />
      <label>
        Consent to Personal Data Processing:
        <input
          type="checkbox"
          name="consentToProcessing"
          checked={formData.consentToProcessing}
          onChange={(e) =>
            setFormData({ ...formData, consentToProcessing: e.target.checked })
          }
          className="ml-2"
          required
        />
        <span className="ml-2">I consent to personal data processing</span>
      </label>
      <label>
        Site Uses Cookie Agreement:
        <input
          type="checkbox"
          name="cookieAgreement"
          checked={formData.cookieAgreement}
          onChange={(e) =>
            setFormData({ ...formData, cookieAgreement: e.target.checked })
          }
          className="ml-2"
          required
        />
        <span className="ml-2">I agree to the site's use of cookies</span>
      </label>
    </>
  );
};

export default Step5;
