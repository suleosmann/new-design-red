import React, { createContext, useContext, useState } from 'react';

const DonationContext = createContext();

export const useDonationContext = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
  const [donationDetails, setDonationDetails] = useState({
    donationType: '',
    pledgeType: '',
    selectedCause: 'Where it Matters',
    amount: 0,  // Default to 0 to avoid null issues in calculations
    donationOption: 'individual',
    currency: 'KES',  // Default currency set to 'KES' for consistency
    processingFee: 0,
    includeProcessingFee: false,
    totalAmount: 0,
    paymentMethod: 'mpesa',
    details: {
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      country: "",
      county: "",
      anonymous: false
    },
    cardDetails: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  const setDonationType = (type) => {
    setDonationDetails(prev => ({ ...prev, donationType: type }));
  };

  const setPledgeType = (type) => {
    setDonationDetails(prev => ({ ...prev, pledgeType: type }));
  };

  const setSelectedCause = (cause) => {
    setDonationDetails(prev => ({ ...prev, selectedCause: cause }));
  };

  const setDonationOption = (option) => {
    setDonationDetails(prev => ({ ...prev, donationOption: option }));
  };

  // Method to update the amount and recalculate the total amount, rounding up
  const setAmount = (amount) => {
    const numAmount = parseFloat(amount) || 0; // Ensure the amount is always treated as a number
    const newProcessingFee = donationDetails.includeProcessingFee ? calculateProcessingFee(numAmount) : 0;
    const newTotal = Math.ceil(numAmount + newProcessingFee);
    setDonationDetails(prev => ({ ...prev, amount: numAmount, processingFee: newProcessingFee, totalAmount: newTotal }));
  };

  // Method to toggle processing fee inclusion and update total amount, rounding up
  const toggleProcessingFee = () => {
    const currentAmount = parseFloat(donationDetails.amount);
    const newIncludeProcessingFee = !donationDetails.includeProcessingFee;
    const newProcessingFee = newIncludeProcessingFee ? calculateProcessingFee(currentAmount) : 0;
    const newTotal = Math.ceil(currentAmount + newProcessingFee);
    setDonationDetails(prev => ({
      ...prev,
      includeProcessingFee: newIncludeProcessingFee,
      processingFee: newProcessingFee,
      totalAmount: newTotal
    }));
  };

  // Helper function to calculate the processing fee
  const calculateProcessingFee = (amount) => {
    return amount * 0.035;  // 3.5% processing fee
  };

  const setCurrency = (currency) => {
    setDonationDetails(prev => ({ ...prev, currency }));
  };

  const setPaymentMethod = (method) => {
    setDonationDetails(prev => ({ ...prev, paymentMethod: method }));
  };

  const setDetails = (field, value) => {
    // Check if the 'anonymous' field is being set to true
    if (field === 'anonymous' && value === true) {
      // Set all details to 'anonymous'
      const anonymousDetails = {
        companyName: "Anonymous",
        firstName: "Anonymous",
        lastName: "Anonymous",
        email: "anonymous@anonymous.com",
        phoneNumber: "Anonymous",
        address: "Anonymous",
        country: "Anonymous",
        county: "Anonymous",
        anonymous: true
      };
      setDonationDetails(prev => ({
        ...prev,
        details: anonymousDetails
      }));
    } else if (field === 'anonymous' && value === false) {
      // If setting anonymous to false, reset to empty or default values
      const clearDetails = {
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        country: "",
        county: "",
        anonymous: false
      };
      setDonationDetails(prev => ({
        ...prev,
        details: clearDetails
      }));
    } else {
      // Regular update for other fields
      setDonationDetails(prev => ({
        ...prev,
        details: { ...prev.details, [field]: value }
      }));
    }
  };
  

  const setCardDetails = (cardDetails) => {
    setDonationDetails(prev => ({ ...prev, cardDetails }));
  };

  return (
    <DonationContext.Provider value={{
      donationDetails,
      setDonationType,
      setPledgeType,
      setSelectedCause,
      setDonationOption,
      setAmount,
      toggleProcessingFee,
      setCurrency,
      setPaymentMethod,
      setDetails,
      setCardDetails
    }}>
      {children}
    </DonationContext.Provider>
  );
};

export default DonationProvider;
