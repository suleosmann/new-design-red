import React from 'react';
import backgroundImage from '../../assets/volunteer.jpeg';

const MyComponent = () => {
  // Inline style for background image if you have a direct URL or imported image
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // This is how you should reference the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };
  

  return (
    <div style={backgroundStyle} className="w-full h-[48vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
        <div className="flex flex-col items-center py-12 bg-opacity-75">
          <div className='mt-48 text-center'>
          <h1 className="text-3xl text-white font-bold text-center mb-4">
            You Can Make A Difference
          </h1>
          <button className=" hover:bg-red-500 text-white font-bold uppercase text-lg px-6 py-3 rounded shadow outline-none focus:outline-none mb-8 transition duration-150 ease-in-out border-2" type="button">
              Volunteer
            </button>          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;