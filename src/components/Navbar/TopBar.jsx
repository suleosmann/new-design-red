import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Make sure this path correctly resolves

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white flex justify-between items-center p-4 hidden md:flex">
      {/* Social Media Icons */}
      <div className="flex items-center ml-20 text-sm">
        <a href="#" className="text-white mr-6 hover:text-gray-300">
          <i className="fab fa-facebook-square"></i> {/* Changed to 'fab' for Font Awesome 5 */}
        </a>
        <a href="#" className="text-white mr-6 hover:text-gray-300">
          <i className="fab fa-twitter"></i> {/* Changed to 'fab' for Font Awesome 5 */}
        </a>
        <a href="#" className="text-white mr-6 hover:text-gray-300">
          <i className="fab fa-instagram"></i> {/* Changed to 'fab' for Font Awesome 5 */}
        </a>
        <a href="#" className="text-white mr-6 hover:text-gray-300">
          <i className="fab fa-linkedin"></i> {/* Changed to 'fab' for Font Awesome 5 */}
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <i className="fab fa-youtube"></i> {/* Changed to 'fab' for Font Awesome 5 */}
        </a>
      </div>
      {/* Contact Information */}
      <div className="flex items-center text-sm">
        <p className="text-white mr-6 hover:text-gray-300">Media Center</p>
        <a href="mailto:info@redcross.or.ke" className="text-white mr-6 hover:text-gray-300">
          <i className="fas fa-envelope mr-2"></i> {/* Changed to 'fas' for Font Awesome 5 */}
          info@redcross.or.ke
        </a>
        <a href="tel:+254703037000" className="text-white mr-6 hover:text-gray-300">
          <i className="fas fa-phone mr-2"></i> {/* Changed to 'fas' for Font Awesome 5 */}
          +254 703 037 000
        </a>
      </div>
      {/* Action Button */}
      <div className="mr-20">
        <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-6">
          Floods Operations
        </a>
      </div>
    </div>
  );
}