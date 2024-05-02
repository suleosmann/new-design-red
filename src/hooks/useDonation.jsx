// hooks/useDonation.js
import { useDonationContext } from '../contexts/DonationContext';

export const useDonation = () => {
  const { donationDetails } = useDonationContext();

  const logDonationDetails = () => {
    // Destructure all necessary parts from donationDetails
    const {
      amount, 
      currency, 
      donationType, 
      pledgeType, 
      selectedCause, 
      donationOption, 
      processingFee, 
      includeProcessingFee, 
      totalAmount, 
      paymentMethod, 
      details, 
      cardDetails
    } = donationDetails;

    // If anonymous, adjust details, otherwise spread them as they are
    const finalDetails = details.anonymous ? {
      firstName: "Anonymous",
      lastName: "Donor",
      email: "anonymous@anonymous.com",
      phoneNumber: "Anonymous",
      companyName: "Anonymous",
      address: "Anonymous",
      country: "Anonymous",
      county: "Anonymous"
    } : details;

    // Combine all relevant data into one flat object for logging
    const logData = {
      donationType,
      pledgeType,
      selectedCause,
      donationOption,
      amount: amount.toString(), // Convert number to string for consistent logging
      currency,
      processingFee: processingFee.toString(),
      includeProcessingFee: includeProcessingFee.toString(),
      totalAmount: totalAmount.toString(),
      paymentMethod,
      ...finalDetails,
      cardNumber: cardDetails.cardNumber,
      expiryDate: cardDetails.expiryDate,
      cvc: cardDetails.cvc
    };

    console.log("Confirming donation with details:", logData);
  };

  return { logDonationDetails };
};
