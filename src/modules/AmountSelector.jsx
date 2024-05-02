  import React, { useState, useEffect, useMemo, useRef } from "react";
  import { useDonationContext } from '../contexts/DonationContext';

  const AmountSelector = () => {
    const { setAmount, setCurrency, toggleProcessingFee, donationDetails, setDonationOption } = useDonationContext();
    const { donationOption, currency, donationType } = donationDetails;

    const [donationAmount, setDonationAmount] = useState("");
    const [otherAmount, setOtherAmount] = useState("0");
    const [includeProcessingFee, setIncludeProcessingFee] = useState(false);

    const amountsUSDIndividual = [20, 50, 150];
    const amountsKSHIndividual = [500, 1000, 5000];
    const amountsUSDOrganization = [10000, 50000, 100000];
    const amountsKSHOrganization = [50000, 100000, 250000];

    const initialRender = useRef(true);


    useEffect(() => {
      if (initialRender.current) {
        initialRender.current = false;
        return;
      }
      // Reset donation amount and other amount when currency changes
      setDonationAmount("");
      setOtherAmount("");
      setIncludeProcessingFee(false); // Optionally reset processing fee inclusion as well
      setAmount(0); // Reset the amount in the context
    }, [currency]); 

    const formatAmount = (amount) => {
      return amount >= 1000 ? `${amount / 1000}k` : amount.toString();
    };

    const parseAmount = (formattedAmount) => {
      if (formattedAmount.includes('k')) {
        return parseFloat(formattedAmount.replace('k', '')) * 1000;
      }
      return parseFloat(formattedAmount);
    };

    const donationOptions = useMemo(() => {
      const options = donationOption === 'organization' ? (currency === 'USD' ? amountsUSDOrganization : amountsKSHOrganization) : (currency === 'USD' ? amountsUSDIndividual : amountsKSHIndividual);
      return options.map(formatAmount);
    }, [donationOption, currency]);

    const handleCheckboxChange = () => {
      setIncludeProcessingFee(!includeProcessingFee);
      toggleProcessingFee();
    };

    useEffect(() => {
      // Only call setAmount if the otherAmount has been explicitly changed by the user and the current selection is "Other"
      if (donationAmount === "Other") {
        const numAmount = parseFloat(otherAmount) || 0;
        if (numAmount !== donationDetails.amount) {
          setAmount(numAmount);
        }
      }
    }, [otherAmount]); // Removed setAmount from dependencies to avoid potential triggers from its updates
    
    // Adjust handleAmountClick to ensure state coherence
    const handleAmountClick = (formattedAmount) => {
      const actualAmount = parseAmount(formattedAmount);
      setDonationAmount(formattedAmount);
      if (formattedAmount !== "Other") {
        setIncludeProcessingFee(false);
        setAmount(actualAmount);
      } else {
        // Ensure that if "Other" is clicked again it doesn't reset unless necessary
        if (otherAmount === "" || isNaN(parseFloat(otherAmount))) {
          setOtherAmount("0"); // Only reset to "0" if necessary
        } else {
          setAmount(parseFloat(otherAmount));
        }
      }
    };
    

    // Calculate the potential processing fee, whether or not it's included
    const potentialProcessingFee = useMemo(() => {
      const baseAmount = donationAmount === "Other" ? parseFloat(otherAmount) : parseAmount(donationAmount);
      return (baseAmount * 0.035).toFixed(2);
    }, [donationAmount, otherAmount, currency]);

    const donationDisplayText = donationType === 'One-off' ? 'One Off Donation' : 'Pledge Donation';

    return (
      <div className="max-w-lg mx-auto p-4 bg-white text-lg font-sans font-bold">
  <h1 className="text-3xl sm:text-5xl mt-12 sm:mt-24 font-bold mb-5 sm:mb-10 text-center">{donationDisplayText}</h1>
  <div className="mb-4 text-center">
    <h2 className="mb-2 text-xl sm:text-2xl">How much would you like to donate?</h2>
    <div className="inline-flex shadow-md rounded-xl overflow-hidden">
      {["KES", "USD"].map((cur) => (
        <button
          key={cur}
          className={`px-4 ${
            currency === cur ? "bg-custom-red text-white" : "bg-white text-custom-red"
          }`}
          onClick={() => setCurrency(cur)}
        >
          {cur}
        </button>
      ))}
    </div>
  </div>
  <div className="mb-4 text-center">
    <label className="inline-flex items-center space-x-2 font-normal text-sm sm:text-base">
      <input
        type="checkbox"
        checked={donationOption === 'organization'}
        onChange={() => setDonationOption(donationOption === 'organization' ? 'individual' : 'organization')}
        className="form-checkbox h-5 w-5 text-custom-red accent-custom-red"
      />
      <span>Check the box if you are an organisation</span>
    </label>
  </div>
  <div className="flex flex-wrap justify-center gap-2 mb-4">
    {donationOptions.map((formattedAmount, index) => (
      <button
        key={index}
        className={`px-4 py-4 border rounded-lg ${
          donationAmount === formattedAmount ? "bg-custom-red text-white border-custom-red" : "border-custom-red text-gray-700"
        }`}
        onClick={() => handleAmountClick(formattedAmount)}
      >
        {currency === "KES" ? `KES ${formattedAmount}` : `$ ${formattedAmount}`}
      </button>
    ))}
    <button
      className={`px-4 py-2 border rounded-lg ${
        donationAmount === "Other" ? "bg-custom-red text-white border-custom-red" : "border-custom-red text-gray-700"
      }`}
      onClick={() => handleAmountClick("Other")}
    >
      Other
    </button>
  </div>
  {donationAmount === "Other" && (
    <input
      type="text"
      placeholder="Enter Amount"
      className="w-full px-4 py-2 border-2 border-custom-red rounded mb-4"
      value={otherAmount}
      onChange={(e) => setOtherAmount(e.target.value)}
    />
  )}
  {donationAmount && (
    <div className="mb-4 ml-4 sm:ml-12">
      <label className="inline-flex items-center space-x-2 font-normal">
        <input
            type="checkbox"
            checked={includeProcessingFee}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-custom-red accent-custom-red"
        />
        <span>{`Add ${currency } ${potentialProcessingFee} to cover processing fees & other expenses associated with my donation`}</span>
      </label>
    </div>
  )}
</div>

    );
  };

  export default AmountSelector;
