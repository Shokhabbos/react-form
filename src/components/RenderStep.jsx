import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

export const renderStep = (
  currentStep,
  formData,
  setFormData,
  setCreditCardType,
  creditCardType,
) => {
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
