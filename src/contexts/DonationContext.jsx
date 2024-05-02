import React, { createContext, useContext, useState } from 'react';

const DonationContext = createContext();

export const useDonationContext = () => useContext(DonationContext);

export const DonationProvider = ({ children }) => {
    const [donationDetails, setDonationDetails] = useState({
        donationType: '',
        pledgeType: '',
        selectedCause: 'Where it Matters',
        amount: 0,
        donationOption: 'individual',
        currency: 'KES',
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

    const calculateProcessingFee = (amount) => {
        return amount * 0.035; // 3.5% processing fee
    };

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

    const setAmount = (amount) => {
        const numAmount = parseFloat(amount) || 0;
        const newProcessingFee = calculateProcessingFee(numAmount);
        const newTotal = Math.ceil(numAmount + (donationDetails.includeProcessingFee ? newProcessingFee : 0));
        setDonationDetails(prev => ({
            ...prev,
            amount: numAmount,
            processingFee: newProcessingFee,
            totalAmount: newTotal
        }));
    };

    const toggleProcessingFee = () => {
        setDonationDetails(prev => ({
            ...prev,
            includeProcessingFee: !prev.includeProcessingFee,
            totalAmount: Math.ceil(prev.amount + (!prev.includeProcessingFee ? calculateProcessingFee(prev.amount) : 0))
        }));
    };

    const setCurrency = (currency) => {
        setDonationDetails(prev => ({ ...prev, currency }));
    };

    const setPaymentMethod = (method) => {
        setDonationDetails(prev => ({ ...prev, paymentMethod: method }));
    };

    const setDetails = (field, value) => {
        setDonationDetails(prev => ({
            ...prev,
            details: { ...prev.details, [field]: value }
        }));
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
