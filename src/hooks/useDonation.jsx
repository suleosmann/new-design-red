import { useDonationContext } from '../contexts/DonationContext';

export const useDonation = () => {
    const { donationDetails } = useDonationContext();

    const logDonationDetails = () => {
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

        const finalDetails = details.anonymous ? {
            title: "Anonymous",
            firstName: "Anonymous",
            lastName: "Donor",
            email: "anonymous@example.com",
            phoneNumber: "Anonymous",
            companyName: "Anonymous",
            address: "Anonymous",
            country: "Anonymous",
            county: "Anonymous"
        } : details;

        const logData = {
            donationType,
            pledgeType,
            selectedCause,
            donationOption,
            amount: amount.toString(),
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
