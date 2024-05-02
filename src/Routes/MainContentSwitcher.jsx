import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import ChooseCausePage from "../pages/ChooseCausePage";
import DonationAmountPage from "../pages/DonationAmountPage";
import DetailsPage from "../pages/DetailsPage";
import PaymentMethodPage from "../pages/PaymentMethodPage";
import ConfirmationPage from "../pages/ConfirmationPage";
import { useDonationContext } from "../contexts/DonationContext";
import { useDonation } from "../hooks/useDonation";

const MainContentSwitcher = () => {
  const steps = [
    "chooseCause",
    "donateAmount",
    "details",
    "paymentMethod",
    "confirmation",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const { donationDetails } = useDonationContext();
  const [errors, setErrors] = useState("");

  const { logDonationDetails } = useDonation();

  const renderComponent = () => {
    switch (steps[activeStep]) {
      case "chooseCause":
        return <ChooseCausePage />;
      case "donateAmount":
        return <DonationAmountPage />;
      case "details":
        return <DetailsPage />;
      case "paymentMethod":
        return <PaymentMethodPage />;
      case "confirmation":
        return <ConfirmationPage />;
      default:
        return <ChooseCausePage />;
    }
  };

  const validateStep = () => {
    switch (steps[activeStep]) {
      case "chooseCause":
        if (!donationDetails.donationType) {
          setErrors("Please select a donation type.");
          return false;
        }
        if (
          donationDetails.donationType === "Pledge" &&
          !donationDetails.pledgeType
        ) {
          setErrors("Please select a pledge type.");
          return false;
        }
        break;
      case "donateAmount":
        if (!donationDetails.amount || donationDetails.amount <= 0) {
          setErrors("Please enter a valid donation amount.");
          return false;
        }
        break;
      case "details":
        // If the donation is marked as anonymous, skip validation for all details fields.
        if (donationDetails.details.anonymous) {
          return true; // Assume all is good since no details are needed.
        }

        // Start with the basic required fields
        let requiredFields = [
          "firstName",
          "lastName",
          "email",
          "phoneNumber",
          "address",
          "country",
        ];

        // If the country is Kenya, add 'county' to the required fields
        if (donationDetails.details.country === "Kenya") {
          requiredFields.push("county");
        }

        // If the donation option is 'organization', add 'companyName' to the required fields
        if (donationDetails.donationOption === "organization") {
          requiredFields.push("companyName");
        }

        // Check if any of the required fields are empty
        const missingField = requiredFields.some(
          (field) => !donationDetails.details[field]
        );

        if (missingField) {
          setErrors("Please complete all required fields.");
          return false;
        }
        break;

      case "paymentMethod":
        if (!donationDetails.paymentMethod) {
          setErrors("Please select a payment method.");
          return false;
        }
        break;
      case "confirmation":
        // Typically no validation needed at the final confirmation step
        break;
    }
    setErrors(""); // Clear any previous errors if validation is successful
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (activeStep === steps.length - 1) {
        // Call logDonationDetails when the final step is reached
        logDonationDetails();
      } else if (activeStep === steps.indexOf("paymentMethod")) {
        // Log donation details when the "Confirm" button is clicked on the "paymentMethod" step
        logDonationDetails();
        setActiveStep(activeStep + 1);
      } else {
        if (
          donationDetails.donationType !== "One-off" &&
          (!donationDetails.pledgeType || donationDetails.pledgeType === "")
        ) {
          // Skip to payment method if the donation type is not One-off and pledge type is not selected
          setActiveStep(steps.indexOf("paymentMethod"));
        } else {
          setActiveStep(activeStep + 1);
        }
      }
    }
    logDonationDetails();
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div>
      <div>{renderComponent()}</div>
      {errors && <p className="text-red-500">{errors}</p>}
      <div className="flex justify-center space-x-2 mt-4">
        {activeStep > 0 && activeStep < steps.length - 1 && (
          <button
            onClick={handleBack}
            className="flex items-center bg-white hover:bg-gray-300 text-black py-2 px-4 rounded-lg transition duration-150 ease-in-out"
          >
            <FaCaretLeft className="mr-2" />
            <span>Back</span>
          </button>
        )}
        {activeStep === steps.length - 1 ? (
          <a
            href="https://redcross.or.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-custom-red hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-150 ease-in-out"
          >
            Go Back to Site
          </a>
        ) : (
          activeStep < steps.length - 1 && (
            <button
              onClick={handleNext}
              className="flex items-center bg-custom-red hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-150 ease-in-out"
            >
              <span>
                {activeStep === steps.indexOf("paymentMethod")
                  ? "Confirm"
                  : "Continue"}
              </span>
              <FaCaretRight className="ml-2" />
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MainContentSwitcher;
