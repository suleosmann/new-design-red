import React, { useState } from 'react';

const causesOptions = [
  'Where it Matters',
  'El-Nino Response',
  'Embakasi Gas Explosion',
];

const SupportDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left mt-4 w-full">
      <div className="mb-2">
        <h1 className="text-4xl sm:text-5xl text-center font-bold my-12 ">Choose a Cause to Support</h1>
      </div>
      <div className="flex items-center justify-center"> {/* This ensures full height and centers vertically and horizontally */}
    <button
      type="button"
      onClick={handleButtonClick}
      className="font-bold inline-flex justify-between items-center w-full max-w-xs sm:max-w-md md:max-w-lg xl:max-w-xl h-12 text-black rounded-md border-2 border-black shadow-sm px-4 py-2 bg-white text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      id="options-menu"
      aria-haspopup="true"
      aria-expanded={isDropdownOpen}
    >
      {selectedOption || 'Choose Cause'}
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
</div>


      {isDropdownOpen && (
        <div className="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {causesOptions.map((option) => (
              <button
                key={option}
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm text-left w-full"
                role="menuitem"
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportDropdown;
