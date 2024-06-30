// src/pages/register/StudentRegister.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginBG from "../../assets/loginBG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const StudentRegister = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    university: "",
    socialStatus: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        console.log("Student registered successfully");
        navigate("/success");
      } else {
        const errorData = await response.json();
        if (errorData.error.includes("UNIQUE constraint failed: students.email")) {
          setErrorMessage("This email is already registered. Please use a different email.");
        } else {
          setErrorMessage("Registration failed: " + errorData.error);
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
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

            {errorMessage && (
              <div className="w-full px-4 mb-6 text-red-500 text-center">
                {errorMessage}
              </div>
            )}

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
                Register as a Landlord
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentRegister;

