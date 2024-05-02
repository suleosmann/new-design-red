// src/components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, variant, size, className, type, isActive }) => {
  const baseStyle = "text-white font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline border-2";
  const variants = {
    primary: "bg-custom-red hover:bg-red-700 text-white border-custom-red",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white border-gray-500",
    active: "bg-white text-red-700 border-custom-red",
  };
  const sizes = {
    small: "text-xs",
    normal: "text-sm",
    large: "text-lg",
  };
  
  const activeStyles = isActive ? variants.active : variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.normal;

  return (
    <button
      type={type}
      className={`${baseStyle} ${activeStyles} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
