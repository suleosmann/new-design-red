import React, { useState } from "react";
import { FaBars, FaTimes, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import logo from "../../assets/logo.png"; // Ensure the logo path is correct

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);

  function toggleDropdown(setDropdownState, currentState) {
    setDropdownState(!currentState);
  }

  return (
    <nav className="bg-white shadow-lg border-b-2 border-custom-red">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center py-4">
            <img src={logo} alt="Logo" className="h-12 w-18 mr-2" />
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
            {/* Desktop Dropdowns */}
            <div className="relative">
              <button onClick={() => toggleDropdown(setIsWhoWeAreOpen, isWhoWeAreOpen)} className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                Who We Are <FaCaretDown className="ml-1" />
              </button>
              {isWhoWeAreOpen && (
                <div className="absolute left-0 bg-white shadow-md mt-2 w-48">
                  <ul>
                    <li className="py-2 px-4 hover:bg-gray-100">About Us</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Governance</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Management Team</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown(setIsWhatWeDoOpen, isWhatWeDoOpen)} className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                What We Do <FaCaretDown className="ml-1" />
              </button>
              {isWhatWeDoOpen && (
                <div className="absolute left-0 bg-white shadow-md mt-2 w-48">
                  <ul>
                    <li className="py-2 px-4 hover:bg-gray-100">Disaster Management</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Health</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Organizational Development</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Youth Programmes</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Special Programmes</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown(setIsGetInvolvedOpen, isGetInvolvedOpen)} className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center">
                Get Involved <FaCaretDown className="ml-1" />
              </button>
              {isGetInvolvedOpen && (
                <div className="absolute left-0 bg-white shadow-md mt-2 w-48">
                  <ul>
                    <li className="py-2 px-4 hover:bg-gray-100">Become a Volunteer</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Become a Member</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Regions and Branches</li>
                    <li className="py-2 px-4 hover:bg-gray-100">WEMA | Volunteer Opportunities</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Careers</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Publications</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Tenders</li>
                    <li className="py-2 px-4 hover:bg-gray-100">Donate</li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Reach Out Blog</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact Us</a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => toggleDropdown(setIsMobileMenuOpen, isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} mobile-menu w-full bg-white shadow-md`}>
        <ul className="text-gray-700">
          <li className="p-2 hover:bg-gray-100"><a href="#">Home</a></li>
          {renderMobileMenuItem("Who We Are", isWhoWeAreOpen, setIsWhoWeAreOpen)}
          {renderMobileMenuItem("What We Do", isWhatWeDoOpen, setIsWhatWeDoOpen)}
          {renderMobileMenuItem("Get Involved", isGetInvolvedOpen, setIsGetInvolvedOpen)}
          <li className="p-2 hover:bg-gray-100"><a href="#">Reach Out Blog</a></li>
          <li className="p-2 hover:bg-gray-100"><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );

  function renderMobileMenuItem(label, isOpen, setIsOpen) {
    return (
      <li>
        <div className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => toggleDropdown(setIsOpen, isOpen)}>
          <span className="flex items-center">
            {label}
            {isOpen ? <FaCaretDown className="ml-2" /> : <FaCaretRight className="ml-2" />}
          </span>
        </div>
        {isOpen && (
          <ul className="pl-8 py-2 bg-white">
            {/* Dynamic rendering of sub-items based on the label */}
            {getSubItems(label)}
          </ul>
        )}
      </li>
    );
  }

  function getSubItems(label) {
    const items = {
      "Who We Are": ["About Us", "Governance", "Management Team"],
      "What We Do": ["Disaster Management", "Health", "Organizational Development", "Youth Programmes", "Special Programmes"],
      "Get Involved": ["Become a Volunteer", "Become a Member", "Regions and Branches", "WEMA | Volunteer Opportunities", "Careers", "Publications", "Tenders", "Donate"]
    };
    return items[label]?.map((item, index) => <li key={index} className="py-1 hover:bg-gray-200">{item}</li>);
  }
};

export default Navbar;