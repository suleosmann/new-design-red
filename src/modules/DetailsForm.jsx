import React, { useState, useEffect } from "react";
import { useDonationContext } from "../contexts/DonationContext";
import { getData } from "country-list";

const DetailsForm = () => {
  const { donationDetails, setDetails } = useDonationContext();
  const { details, donationOption, donationType } = donationDetails;
  const [isOrganisation, setIsOrganisation] = useState(
    donationOption === "organization"
  );
  const countries = getData();
  const [errors, setErrors] = useState({});

  // Kenyan counties list
  const kenyanCounties = [
    "Baringo",
    "Bomet",
    "Bungoma",
    "Busia",
    "Elgeyo Marakwet",
    "Embu",
    "Garissa",
    "Homa Bay",
    "Isiolo",
    "Kajiado",
    "Kakamega",
    "Kericho",
    "Kiambu",
    "Kilifi",
    "Kirinyaga",
    "Kisii",
    "Kisumu",
    "Kitui",
    "Kwale",
    "Laikipia",
    "Lamu",
    "Machakos",
    "Makueni",
    "Mandera",
    "Marsabit",
    "Meru",
    "Migori",
    "Mombasa",
    "Murang'a",
    "Nairobi",
    "Nakuru",
    "Nandi",
    "Narok",
    "Nyamira",
    "Nyandarua",
    "Nyeri",
    "Samburu",
    "Siaya",
    "Taita-Taveta",
    "Tana River",
    "Tharaka-Nithi",
    "Trans Nzoia",
    "Turkana",
    "Uasin Gishu",
    "Vihiga",
    "Wajir",
    "West Pokot",
  ];

  // Handle changes in the input fields
  // Handle changes in the input fields
  const handleChange = (field, value) => {
    setDetails(field, value);
    validateField(field, value); // Validate the field
  };

  const toggleAnonymous = (e) => {
    setDetails("anonymous", e.target.checked);
  };

  // Sync the isOrganisation state with changes in donationOption
  useEffect(() => {
    setIsOrganisation(donationOption === "organization");
  }, [donationOption]);

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone number
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?\d{1,3}?[-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  // Validate a field
  const validateField = (field, value) => {
    let error = "";
    switch (field) {
      case "email":
        if (!validateEmail(value)) {
          error = "Invalid email address";
        }
        break;
      case "phoneNumber":
        if (!validatePhoneNumber(value)) {
          error = "Invalid phone number";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">
        {isOrganisation ? "Your Organisation Details" : "Your Contact Details"}
      </h1>
      <div className="space-y-2">
        {isOrganisation ? (
          <>
            <div className="relative">
              <input
                type="text"
                id="companyName"
                value={details.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="companyName"
                className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Company Name
              </label>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <div className="relative mb-4 sm:mb-0">
                <input
                  type="text"
                  id="firstName"
                  value={details.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="block w-full pl-3.5 pr-8 pb-2.5 pt-4 text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="firstName"
                  className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  value={details.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="block w-full pl-2.5 pr-12 pb-2.5 pt-4 text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="lastName"
                  className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                value={details.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className={`ml-1 absolute text-sm ${
                  errors.email ? "text-red-500" : "text-gray-500"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
              >
                Email
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  value={details.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className={`ml-1 absolute text-sm ${
                    errors.phoneNumber ? "text-red-500" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                  Phone Number
                </label>
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  value={details.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="address"
                  className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Physical Address
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <select
                  id="country"
                  value={details.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              {details.country === "Kenya" && (
                <div className="relative">
                  <select
                    id="county"
                    value={details.county}
                    onChange={(e) => handleChange("county", e.target.value)}
                    className="block w-full px-2.5 pb-2.5 pt-4 text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                  >
                    <option value="">Select County</option>
                    {kenyanCounties.map((county) => (
                      <option key={county} value={county}>
                        {county}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {!details.anonymous && (
              <>
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative">
                    <select
                      id="title"
                      value={details.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option value="" disabled hidden>
                        Select Title
                      </option>
                      <option value="">None</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                    </select>
                    
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      value={details.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="firstName"
                      className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      value={details.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="lastName"
                      className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={details.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`ml-1 absolute text-sm ${
                      errors.email ? "text-red-500" : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                  >
                    Email
                  </label>
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="phone"
                      value={details.phoneNumber}
                      onChange={(e) =>
                        handleChange("phoneNumber", e.target.value)
                      }
                      className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className={`ml-1 absolute text-sm ${
                        errors.phoneNumber ? "text-red-500" : "text-gray-500"
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white pl-2.5 pr-12 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
                    >
                      Phone Number
                    </label>
                    {errors.phoneNumber && (
                      <span className="text-red-500 text-sm">
                        {errors.phoneNumber}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      value={details.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      className="block pl-2.5 pr-12 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="address"
                      className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Physical Address
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <select
                      id="country"
                      value={details.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                      className="block w-full pl-2.5 pr-12 pb-2.5 pt-4 text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {details.country === "Kenya" && (
                    <div className="relative">
                      <select
                        id="county"
                        value={details.county}
                        onChange={(e) => handleChange("county", e.target.value)}
                        className="block w-full pl-2.5 pr-12 pb-2.5 pt-4 text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                      >
                        <option value="">Select County</option>
                        {kenyanCounties.map((county) => (
                          <option key={county} value={county}>
                            {county}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </>
            )}
            {donationType !== "Pledge" && (
              <div className="relative mt-4">
                <input
                  type="checkbox"
                  checked={donationDetails.details.anonymous}
                  onChange={(e) => setDetails("anonymous", e.target.checked)}
                  className="form-checkbox text-custom-red accent-custom-red"
                />
                <label
                  htmlFor="anonymous"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Check the box if you would like to donate anonymously
                </label>
              </div>
            )}
          </>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-4">
        We securely store your personal details for use solely by the Red Cross
        Society. Your information may be analyzed to enhance our services and
        shared with our suppliers if legally necessary. For complete details,
        please see our Privacy Policy.
      </p>
    </div>
  );
};

export default DetailsForm;
