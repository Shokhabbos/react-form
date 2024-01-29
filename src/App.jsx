import React, { useState } from "react";
import Cleave from "cleave.js/react";
import Modal from "./components/Modal";

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
    cardNumber: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [creditCardType, setCreditCardType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateStep = () => {
    // Validate credit card number
    if (!isCreditCardValid(formData.cardNumber)) {
      console.log("Invalid credit card number");
      return false;
    }

    // Add additional validation logic for other fields if needed

    return true;
  };

  const isCreditCardValid = (cardNumber) => {
    // Placeholder for basic credit card validation (replace with actual logic)
    return true; // Placeholder, replace with actual validation
  };
  const handleNextStep = () => {
    const isStepValid = validateStep();

    if (isStepValid) {
      if (currentStep === 6) {
        // Show modal when reaching the final step
        setIsModalOpen(true);
      } else {
        // Move to the next step
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
      console.log("Form submitted:", formData);
      setIsModalOpen(true);
      // Add logic to submit the form data
    }
  };

  const handleCreditCardTypeChanged = (type) => {
    setCreditCardType(type);
  };

  const handleCardNumberChange = (e) => {
    setFormData({ ...formData, cardNumber: e.target.value });
  };

  const renderCardImages = () => {
    const cardImages = [
      {
        type: "MasterCard",
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
      },
      {
        type: "Visa",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1920px-Visa_2021.svg.png",
      },
      {
        type: "Amex",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/641px-American_Express_logo_%282018%29.svg.png",
      },
      {
        type: "maestro",
        src: "https://www.freevector.com/uploads/vector/preview/1517/FreeVector-Maestro.jpg",
      },
    ];

    return (
      <div className="mt-2 flex space-x-4">
        {cardImages.map((card) => (
          <img
            key={card.type}
            src={card.src}
            alt={card.type}
            className={`h-8 ${
              creditCardType === card.type.toLowerCase()
                ? "opacity-100"
                : "opacity-30"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-5 rounded-md border  bg-white p-6 shadow-lg  drop-shadow-lg ">
      <div className="">
        <h2 className="mb-4 text-2xl font-bold">
          User Registration Wizard - Step {currentStep}
        </h2>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <label>
                Login:
                <input
                  type="text"
                  name="login"
                  value={formData.login}
                  onChange={(e) =>
                    setFormData({ ...formData, login: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                />
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                />
              </label>
            </>
          )}

          {currentStep === 2 && (
            <>
              <label>
                Subscription Type:
                <select
                  name="subscriptionType"
                  value={formData.subscriptionType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subscriptionType: e.target.value,
                    })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                >
                  <option value="">Choose an option</option>
                  <option value="free">Free</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </label>
            </>
          )}

          {currentStep === 3 && (
            <>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                  required
                />
              </label>
              <label>
                Middle Name:
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormData({ ...formData, middleName: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                />
              </label>
              <label>
                Birthdate:
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={(e) =>
                    setFormData({ ...formData, birthdate: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                  required
                />
              </label>
              <label>
                Gender:
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="mb-4 w-full rounded-md border px-4 py-2 transition duration-300 focus:border-purple-500 focus:outline-none focus:ring focus:ring-purple-200"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label>
                Are you older than 18?
                <input
                  type="checkbox"
                  name="isOlderThan18"
                  checked={formData.isOlderThan18}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      isOlderThan18: e.target.checked,
                    })
                  }
                  className="mr-2"
                  required
                />
                Yes
              </label>
            </>
          )}

          {currentStep === 4 && (
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

              {creditCardType !== null && renderCardImages()}
            </>
          )}

          {currentStep === 5 && (
            <>
              {/* Step 5 UI and form fields */}
              <h2>Step 5 - Consent to Personal Data Processing</h2>
              <div className="mb-4">
                <label>
                  Login:
                  <input
                    type="text"
                    value={formData.login}
                    disabled
                    className="ml-2 rounded-md border px-3 py-2"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  Email:
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="ml-2 rounded-md border px-3 py-2"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label>
                  Consent to Personal Data Processing:
                  <input
                    type="checkbox"
                    name="consentToProcessing"
                    checked={formData.consentToProcessing}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consentToProcessing: e.target.checked,
                      })
                    }
                    className="ml-2"
                    required
                  />
                  <span className="ml-2">
                    I consent to personal data processing
                  </span>
                </label>
              </div>
              <div className="mb-4">
                <label>
                  Site Uses Cookie Agreement:
                  <input
                    type="checkbox"
                    name="cookieAgreement"
                    checked={formData.cookieAgreement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cookieAgreement: e.target.checked,
                      })
                    }
                    className="ml-2"
                    required
                  />
                  <span className="ml-2">
                    I agree to the site's use of cookies
                  </span>
                </label>
              </div>
            </>
          )}

          {currentStep === 6 && (
            <>
              {/* Final step UI and displaying entered data */}
              <h2 className="mb-4 text-2xl font-bold">
                Review your information
              </h2>

              <div className="rounded-md bg-gray-100 p-4 shadow-md">
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
                  <strong>Subscription Type:</strong>{" "}
                  {formData.subscriptionType}
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

                {/* Add similar lines for other fields as needed */}
              </div>
            </>
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
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
