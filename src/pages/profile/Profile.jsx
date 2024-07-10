import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") !== null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const getAccountType = () => {
    if (user) {
      return user.hasOwnProperty("university") ? "Renter" : "Landowner";
    }
    return "";
  };

  return (
    <div className="min-h-screen p-4 bg-white font-montserrat">
      <div className="flex flex-col md:flex-row h-full w-full">
        <div className="w-full max-w-[120px] md:max-w-[180px] bg-white rounded-lg shadow-right p-5 mb-4 md:mb-0 md:mr-4 ml-10">
          <ul className="list-none p-0 m-0">
            <li className="flex items-center py-2 font-bold text-[#3D3E3F] cursor-pointer">
              <span className="material-icons mr-2">person</span>
              <span>Profile</span>
            </li>
            <li className="flex items-center py-2 font-bold text-[#3D3E3F] cursor-pointer">
              <span className="material-icons mr-2">bookmark</span>
              <span>Bookmarks</span>
            </li>
            <li className="flex items-center py-2 font-bold text-[#3D3E3F] cursor-pointer">
              <span className="material-icons mr-2">event</span>
              <span>Visits</span>
            </li>
            <li className="flex items-center py-2 font-bold text-[#3D3E3F] cursor-pointer">
              <span className="material-icons mr-2">rate_review</span>
              <span>To Review</span>
            </li>
            <li className="flex items-center py-2 font-bold text-[#3D3E3F] cursor-pointer">
              <span className="material-icons mr-2">security</span>
              <span>Security</span>
            </li>
            <li
              className="flex items-center py-2 font-bold text-[#3D3E3F] cursor-pointer"
              onClick={handleLogout}
            >
              <span className="material-icons mr-2">logout</span>
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-6 bg-white">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/100x100"
              alt="User Profile Picture"
            />
            <button className="text-blue-600 mt-2 bg-none border-none cursor-pointer">
              Change Picture
            </button>
            {user && (
              <h1 className="text-xl font-semibold mt-4">
                Welcome, {user.fullName}
              </h1>
            )}
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Name</span>
              {user && (
                <h1 className="flex-1 text-right mr-4">{user.fullName}</h1>
              )}
              <span className="material-icons text-gray-400 cursor-pointer">
                edit
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Email Address</span>
              {user && <h1 className="flex-1 text-right mr-4">{user.email}</h1>}
              <span className="material-icons text-gray-400 cursor-pointer">
                edit
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Mobile Number</span>
              {user && <h1 className="flex-1 text-right mr-4">{user.phone}</h1>}
              <span className="material-icons text-gray-400 cursor-pointer">
                edit
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Account Type</span>
              <span className="flex-1 text-right mr-4">{getAccountType()}</span>
            </div>
          </div>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </div>
  );
};

export default Profile;
