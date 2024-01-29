import React, { useState } from "react";
import { renderStep } from "./components/RenderStep";
import { Modal } from "./components";

const App = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    subscriptionType: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthdate: "",
    email: "",
    gender: "",
    isOlderThan18: false,
    cardNumber: "",
    consentToProcessing: false,
    cookieAgreement: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [creditCardType, setCreditCardType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateStep = () => {
    return true;
  };

  const handleNextStep = () => {
    const isStepValid = validateStep();

    if (isStepValid) {
      setCurrentStep((prevStep) => {
        // Ensure that the next step is either the next one or 7, but not skipping step 6
        return prevStep + 1;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateStep();

    if (currentStep === 6 && isFormValid) {
      setIsModalOpen(true);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCloseModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      resetForm();
    }
  };

  return (
    <div className="container mx-auto mt-5 rounded-md border  bg-white p-6 shadow-lg  drop-shadow-lg ">
      <h2 className="mb-4 text-2xl font-bold">
        User Registration Wizard - Step {currentStep}
      </h2>
      <form onSubmit={handleSubmit}>
        {renderStep(
          currentStep,
          formData,
          setFormData,
          setCreditCardType,
          creditCardType,
        )}

        <div className="mt-4 flex space-x-4">
          {currentStep !== 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
            >
              Previous
            </button>
          )}
          {currentStep !== 6 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        backTo={() => setIsModalOpen(false)}
        close={handleCloseModal}
      />
    </div>
  );
};

export default App;
