import React, { useState } from 'react';
import Button from '../components/Customs/Button'; // Ensure the path is correct
import { useDonationContext } from '../contexts/DonationContext';

const DonationType = () => {
  const [activeDonationType, setActiveDonationType] = useState(null);
  const [selectedPledgeType, setSelectedPledgeType] = useState(null);
  const [showPledgeOptions, setShowPledgeOptions] = useState(false);
  const { setDonationType, setPledgeType } = useDonationContext();

  const handleDonationSelect = (type) => {
    setDonationType(type);
    setActiveDonationType(type);
    console.log(`${type} donation selected.`);
    if (type !== 'Pledge') {
      setShowPledgeOptions(false);
      setSelectedPledgeType(null); // Reset pledge selection
    } else {
      setShowPledgeOptions(!showPledgeOptions); // Toggle to show/hide on click
    }
  };

  const handlePledgeSelect = (type) => {
    setPledgeType(type);
    setSelectedPledgeType(type);
    console.log(`${type} pledge selected.`);
    setShowPledgeOptions(false); // Close the options once a selection is made
  };

  return (
    <div className="bg-white mt-10 p-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <Button
          onClick={() => handleDonationSelect('One-off')}
          variant={activeDonationType === 'One-off' ? 'active' : 'primary'}
          size="large"
          isActive={activeDonationType === 'One-off'}
        >
          One-off Donation
        </Button>
        <div className="relative">
          <Button
            onClick={() => handleDonationSelect('Pledge')}
            variant={(activeDonationType === 'Pledge' || selectedPledgeType) ? 'active' : 'primary'}
            size="large"
            isActive={activeDonationType === 'Pledge' || selectedPledgeType}
          >
            Make a Pledge
          </Button>
          {showPledgeOptions && (
            <div className="absolute w-full flex flex-col items-center mt-2 space-y-2">
              <Button
                onClick={() => handlePledgeSelect('Monthly')}
                variant='secondary'
                size="large"
                className="w-44"
              >
                Monthly
              </Button>
              <Button
                onClick={() => handlePledgeSelect('One-time')}
                variant='secondary'
                size="large"
                className="w-44"
              >
                One Time
              </Button>
            </div>
          )}
          
        </div>
        
      </div>
      {selectedPledgeType && (
            <p className="text-custom-red mt-2">
              Selected: {selectedPledgeType}
            </p>
          )}
      <p className="text-gray-600 mt-10 px-32">
        Thank you for deciding to make a vital donation. Your kindness will help give our courageous lifesavers everything they need to keep others – and themselves – safe.
      </p>
    </div>
  );
};

export default DonationType;
