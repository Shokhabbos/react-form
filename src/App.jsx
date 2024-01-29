import React, { useState } from "react";
import { Modal, Step1, Step2, Step3, Step4, Step5, Step6 } from "./components";

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

  const resetForm = () => {
    setFormData({
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

    setCurrentStep(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const validateStep = () => {
    return true;
  };

  const handleNextStep = () => {
    const isStepValid = validateStep();

    if (isStepValid) {
      if (currentStep === 6) {
        setIsModalOpen(true);
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateStep();

    if (isFormValid) {
      setIsModalOpen(true);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 4:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            setCreditCardType={setCreditCardType}
            creditCardType={creditCardType}
          />
        );
      case 5:
        return <Step5 formData={formData} setFormData={setFormData} />;
      case 6:
        return <Step6 formData={formData} />;
      default:
        return null;
    }
  };
  return (
    <div className="container mx-auto mt-5 rounded-md border  bg-white p-6 shadow-lg  drop-shadow-lg ">
      <div className="">
        <h2 className="mb-4 text-2xl font-bold">
          User Registration Wizard - Step {currentStep}
        </h2>
        <form onSubmit={handleSubmit}>
          {renderStep()}

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
      </div>
      <Modal
        isOpen={isModalOpen}
        backTo={() => setIsModalOpen(false)}
        close={handleCloseModal}
      />
    </div>
  );
};

export default App;
