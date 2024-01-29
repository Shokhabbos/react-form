import React from "react";

const Step6 = ({ formData }) => {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Review your information</h2>

      <div className="rounded-md  p-4 ">
        <p className="mb-2">
          <strong>Login:</strong> {formData.login}
        </p>
        <p className="mb-2">
          <strong>Password:</strong> {formData.password}
        </p>
        <p className="mb-2">
          <strong>Confirm Password:</strong> {formData.confirmPassword}
        </p>
        <p className="mb-2">
          <strong>Subscription Type:</strong> {formData.subscriptionType}
        </p>
        <p className="mb-2">
          <strong>First Name:</strong> {formData.firstName}
        </p>
        <p className="mb-2">
          <strong>Last Name:</strong> {formData.lastName}
        </p>
        <p className="mb-2">
          <strong>Middle Name:</strong> {formData.middleName}
        </p>
        <p className="mb-2">
          <strong>Birthdate:</strong> {formData.birthdate}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {formData.email}
        </p>
        <p className="mb-2">
          <strong>Gender:</strong> {formData.gender}
        </p>
        <p className="mb-2">
          <strong>Are you older than 18?</strong>{" "}
          {formData.isOlderThan18 ? "Yes" : "No"}
        </p>
        <p className="mb-2">
          <strong>Card Number:</strong> {formData.cardNumber}
        </p>
        <p className="mb-2">
          <strong>Consent to personal data processing:</strong>{" "}
          {formData.consentToProcessing ? "Yes" : "No"}
        </p>
        <p className="mb-2">
          <strong>Site uses cookie agreement:</strong>{" "}
          {formData.cookieAgreement ? "Yes" : "No"}
        </p>
      </div>
    </>
  );
};

export default Step6;
