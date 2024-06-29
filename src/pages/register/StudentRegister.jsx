import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBG from "../../assets/loginBG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const StudentRegister = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    university: "",
    socialStatus: "",
    phone: "",
    password: "",
    confirmPassword: "",
    rentPrices: {
      under1000: false,
      under2000: false,
      under3000: false,
      under4000: false,
    },
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        rentPrices: {
          ...form.rentPrices,
          [name]: checked,
        },
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", form);
    // Navigate to the success page after form submission
    navigate("/success");
  };

  const handleRentPriceToggle = (price) => {
    const updatedRentPrices = {
      ...form.rentPrices,
      [price]: !form.rentPrices[price],
    };
    setForm({
      ...form,
      rentPrices: updatedRentPrices,
    });
  };

  return (
    <>
      <div className="flex items-center font-montserrat justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loginBG})` }}>
        <div className="w-full md:w-3/5 h-auto m-5 md:m-[5%] bg-white bg-opacity-80 gap-4 backdrop-blur-md rounded-lg p-5 md:p-[5%] shadow-md flex flex-col">
          <h1 className="text-center md:text-left">
            <span className="text-3xl font-bold mb-3 text-[#0077B5]">Student </span>
            <span className="text-3xl text-[#000000] font-bold mb-3">Registration</span>
          </h1>
          <p className="text-[#404040] mb-4">
            We need you to help us with some basic information for your account creation. Here are our <a href="#" className="text-[#0077B5]">terms and conditions</a>. Please read them carefully. We are GDPR compliant
          </p>
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-4 mb-6">
                <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                  <span>Full Name</span>
                  <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="w-full md:w-1/2 px-4 mb-6">
                <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                  <span>Email</span>
                  <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* University */}
              <div className="w-full md:w-1/2 px-4 mb-6">
                <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                  <span>University</span>
                  <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                </label>
                <input
                  type="text"
                  name="university"
                  placeholder="University"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                  value={form.university}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Social Status */}
              <div className="w-full md:w-1/2 px-4 mb-6">
                <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                  <span>Social Status</span>
                  <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                </label>
                <input
                  type="text"
                  name="socialStatus"
                  placeholder="Social Status"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                  value={form.socialStatus}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Preferred Rent Prices */}
              <div className="w-full px-4 mb-6">
                <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                  <span>Preferred Rent Prices</span>
                  <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className={`py-2 px-4 border border-gray-300 rounded-lg ${form.rentPrices.under1000 ? "bg-[#0077B5] text-white" : "bg-transparent text-[#0077B5] hover:bg-[#0077B5] hover:text-white"}`}
                    onClick={() => handleRentPriceToggle("under1000")}
                  >
                    {"< $1000"}
                  </button>
                  <button
                    type="button"
                    className={`py-2 px-4 border border-gray-300 rounded-lg ${form.rentPrices.under2000 ? "bg-[#0077B5] text-white" : "bg-transparent text-[#0077B5] hover:bg-[#0077B5] hover:text-white"}`}
                    onClick={() => handleRentPriceToggle("under2000")}
                  >
                    {"< $2000"}
                  </button>
                  <button
                    type="button"
                    className={`py-2 px-4 border border-gray-300 rounded-lg ${form.rentPrices.under3000 ? "bg-[#0077B5] text-white" : "bg-transparent text-[#0077B5] hover:bg-[#0077B5] hover:text-white"}`}
                    onClick={() => handleRentPriceToggle("under3000")}
                  >
                    {"< $3000"}
                  </button>
                  <button
                    type="button"
                    className={`py-2 px-4 border border-gray-300 rounded-lg ${form.rentPrices.under4000 ? "bg-[#0077B5] text-white" : "bg-transparent text-[#0077B5] hover:bg-[#0077B5] hover:text-white"}`}
                    onClick={() => handleRentPriceToggle("under4000")}
                  >
                    {"< $4000"}
                  </button>
                </div>
              </div>

              {/* Phone Number */}
              <div className="w-full px-4 mb-6">
                <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                  <span>Phone Number</span>
                  <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                  pattern="[0-9]{11}"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password and Confirm Password */}
              <div className="flex flex-wrap w-full px-4 mb-6">
                <div className="w-full md:w-1/2 md:pr-2 mb-6">
                  <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                    <span>Password</span>
                    <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-2 mb-6">
                  <label className="flex items-center justify-between text-[#1A1A1A] text-sm font-regular mb-2">
                    <span>Confirm Password</span>
                    <FontAwesomeIcon icon={faQuestionCircle} className="ml-2 text-gray-500 text-sm cursor-pointer" />
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="my-4 px-10 py-3 rounded-full bg-[#0077B5] text-white shadow-lg"
            >
              Register
            </button>

            {/* Not a student link */}
            <p className="text-[#404040] mb-4 text-center md:text-left">
              Not a student?{" "}
              <Link to="/landlord-register" className="text-[#0077B5]">
                Click here to register as a Landlord
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentRegister;
