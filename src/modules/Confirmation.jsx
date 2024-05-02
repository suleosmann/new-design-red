import React from "react";
import Button from '../components/Customs/Button'; // Ensure this is the correct path
import { useNavigate } from "react-router-dom";
import { useDonationContext } from "../contexts/DonationContext";


const Confirmation = () => {
  const navigate = useNavigate();
  const { donationDetails } = useDonationContext();
  const {currency, totalAmount} = donationDetails;

  return (
    <div className=" bg-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold my-16 sm-text-3xl">Congratulations</h1>
      <h2 className="text-2xl font-bold my-2">Your Donation</h2>
      <p className="text-5xl font-bold mb-4">{currency} {totalAmount}</p>
      <p className="text-center text-sm mt-6  mb-6 w-full">
        We will always store your personal details securely, and they will only be used by Red Cross Society.
        Your data may also be used for analysis purposes, to help us provide the best service possible. We will
        only allow information to be used by suppliers working on our behalf and we’ll only share it if required to
        do so by law. For full details see our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
      </p>
      
    </div>
  );
};

export default Confirmation;
