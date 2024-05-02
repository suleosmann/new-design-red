import React, { useState } from "react";
import card from "../assets/cards.jpeg";
import mpesaLogo from "../assets/mpesa.png";
import { useDonationContext } from "../contexts/DonationContext";
import { FaCreditCard, FaMobileAlt } from "react-icons/fa";

const PaymentDetails = () => {
  const { donationDetails, setCardDetails, setPaymentMethod, setDetails } =
    useDonationContext();
  const {
    
    currency,
    details: { phoneNumber },
    totalAmount,
  } = donationDetails;



  const [selectedMethod, setSelectedMethod] = useState(currency === "KES" ? "mpesa" : "card");

  const handleInputChange = (field, value) => {
    setDetails(field, value);
  };

  const handleMpesaChange = (value) => {
    setDetails("phoneNumber", value);
  };

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
    setPaymentMethod(method);
  };

  const handleCardDetailsChange = (field, value) => {
    setCardDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-w-lg mx-auto p-4 bg-white">
      <h3 className="text-lg font-bold mb-1">Your Donation</h3>
      <h1 className="text-5xl font-bold mb-2">{currency} {donationDetails.amount}</h1>
      <div className="my-8 border-b-2 border-gray-400"></div>
      <h3 className="text-5xl font-bold">Payment Methods</h3>
      <div className="flex space-x-4 my-4">
        <button
          className={`p-2 rounded ${
            selectedMethod === "card" ? "bg-gray-300" : "bg-white"
          } shadow`}
          onClick={() => handleMethodChange("card")}
        >
          <FaCreditCard style={{ fontSize: "32px" }} />
        </button>
        {currency !== "USD" && (
          <button
            className={`p-2 rounded ${
              selectedMethod === "mpesa" ? "bg-gray-300" : "bg-white"
            } shadow`}
            onClick={() => handleMethodChange("mpesa")}
          >
            <FaMobileAlt style={{ fontSize: "32px" }} />
          </button>
        )}
      </div>
      {selectedMethod === "card" && (
        <div>
          <div className="relative mb-4">
            <input
              type="text"
              id="CardNumber"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) =>
                handleCardDetailsChange("cardNumber", e.target.value)
              }
            />
            <label
              htmlFor="CardNumber"
              className="ml-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Card Number
            </label>
            <img
              className="absolute right-2 top-2 w-16 h-10"
              src={card}
              alt="Card Logo"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <input
                type="text"
                id="Expiry"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) =>
                  handleCardDetailsChange("expiryDate", e.target.value)
                }
              />
              <label
                htmlFor="Expiry"
                className="ml-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Expiry Date
              </label>
            </div>
            <div className="relative w-1/3">
              <input
                type="text"
                id="CVC"
                placeholder=" "
                className="block px-2.5 pb-2.5 pt-4 w-64 text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => handleCardDetailsChange("cvc", e.target.value)}
              />
              <label
                htmlFor="CVC"
                className="ml-2 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                CVC
              </label>
            </div>
          </div>
        </div>
      )}
      {selectedMethod === "mpesa" && currency !== "USD" && (
        <div>
          <div className="flex justify-center">
            <img src={mpesaLogo} alt="Mpesa Logo" className="h-20" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 text-lg rounded focus:border-blue-500 focus:outline-none"
              placeholder="Enter your phone number"
              value={phoneNumber === "anonymous" ? phoneNumber : ""}
              onChange={(e) => handleMpesaChange(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Total Amount
            </label>
            <input
              type="number"
              id="amount"
              className="mt-1 block w-full px-4 py-2 border-2 border-gray-300 text-lg rounded focus:border-blue-500 focus:outline-none"
              value={totalAmount}
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
