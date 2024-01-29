import React from "react";
import Cleave from "cleave.js/react";
import { RenderCardImages } from "./RenderCardImages";

const Step4 = ({
  formData,
  setFormData,
  setCreditCardType,
  creditCardType,
}) => {
  const handleCreditCardTypeChanged = (type) => {
    setCreditCardType(type);
  };

  const handleCardNumberChange = (e) => {
    setFormData({ ...formData, cardNumber: e.target.value });
  };

  return (
    <>
      <label>
        Card Number:
        <Cleave
          options={{
            creditCard: true,
            onCreditCardTypeChanged: handleCreditCardTypeChanged,
          }}
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleCardNumberChange}
          className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
          required
        />
      </label>

      {creditCardType !== null && (
        <RenderCardImages creditCardType={creditCardType} />
      )}
    </>
  );
};

export default Step4;
