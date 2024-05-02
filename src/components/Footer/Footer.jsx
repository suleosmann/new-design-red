import React from 'react';
// Icons can be from FontAwesome, replace `IconName` with the actual icon component name you have

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Section - Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <div className="border-b-4 border-red-600 w-10 mb-6"></div>
          <ul className="space-y-3">
            <li>Careers</li>
            <li>Publications</li>
            <li>Tenders</li>
            <li>Branches and Regions</li>
            <li>Staff Portal</li>
            <li>Staff Email</li>
          </ul>
        </div>

        {/* Section - Platforms & Websites */}
        <div>
          <h3 className="text-lg font-bold mb-4">Platforms & Websites</h3>
          <div className="border-b-4 border-red-600 w-10 mb-6"></div>
          <ul className="space-y-3">
            <li>WEMA Platform</li>
            <li>Membership and Volunteerism</li>
            <li>Referral Directories</li>
            <li>I.O.Me 254</li>
            <li>Donations Platform</li>
            <li>Admin Dashboard</li>
          </ul>
        </div>

        {/* Section - Our Affiliates & Partners */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Affiliates & Partners</h3>
          <div className="border-b-4 border-red-600 w-10 mb-6"></div>
          <ul className="space-y-3">
            <li>Boma Panafrican</li>
            <li>ICHA</li>
            <li>IFRC</li>
            <li>ICRC</li>
          </ul>
        </div>

        {/* Section - Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="border-b-4 border-red-600 w-10 mb-6"></div>
          <p className="mb-3">(+254) 703 037 000</p>
          <p className="mb-3">info@redcross.or.ke</p>
          <p className="mb-3">P. O. Box 40712 -</p>
          <p className="mb-3">00100 GPO Nairobi</p>
          <p className="mb-3">South C (Bellevue),</p>
          <p className="mb-3">Red Cross Road, Off</p>
          <p className="mb-3">Popo Road, Nairobi,</p>
          <p>Kenya</p>
          <p className="mt-6">Report a Concern</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <p>&copy; 2024 Kenya Red Cross Society, All Rights Reserved</p>
          <div className="flex mt-4 md:mt-0 space-x-4 justify-center md:justify-start">
            <a href="#" className="hover:text-gray-400">Accessibility Statement</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
          <div className="flex space-x-4 justify-center md:justify-end mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              {/* Replace `IconName` with actual icon components */}
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;