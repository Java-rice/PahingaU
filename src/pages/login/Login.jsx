// src/pages/login/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginBG from "../../assets/loginBG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLandlord, setIsLandlord] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLandlordChange = () => setIsLandlord(!isLandlord);

  // src/pages/login/Login.jsx
  // src/pages/login/Login.jsx
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      try {
        const response = await axios.post("http://localhost:3001/api/login", {
          email,
          password,
          isLandlord,
        });
        if (response.data.message === "Login successful") {
          // Store user data in localStorage
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("isLandlord", isLandlord);
          navigate("/Home");
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setLoginError(error.response.data.error);
        } else {
          console.error("There was an error logging in!", error);
          setLoginError("An unexpected error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <div
      className="flex items-center font-montserrat justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <div className="w-auto aspect-square bg-white bg-opacity-80 gap-4 backdrop-blur-md rounded-lg p-10 flex flex-col items-center justify-center text-center">
        <h1>
          <span className="text-3xl font-bold mb-3 text-[#0077B5]">Log</span>
          <span className="text-3xl text-[#000000] font-bold mb-3"> in</span>
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome Back! Discover Your Home with PahingaU!
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="relative flex items-center w-full mx-auto my-4">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-4 text-[#1C1C1C]"
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full pl-10 p-2 rounded-lg border border-gray-300"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {emailError && <p className="text-red-500">{emailError}</p>}
          <div className="relative flex items-center w-full mx-auto my-4">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-4 text-[#1C1C1C]"
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full pl-10 p-2 rounded-lg border border-gray-300"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          {loginError && <p className="text-red-500">{loginError}</p>}
          <div className="flex items-center w-full mx-auto my-3">
            <input
              type="checkbox"
              id="landlord"
              checked={isLandlord}
              onChange={handleLandlordChange}
              className="mr-2"
            />
            <label htmlFor="landlord" className="text-gray-600">
              Login as Landlord
            </label>
          </div>
          <button
            type="submit"
            className="w-1/3 mx-auto my-4 py-3 rounded-full bg-[#0077B5] text-white shadow-lg"
          >
            Login Now
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-[#0077B5] underline font-bold">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
