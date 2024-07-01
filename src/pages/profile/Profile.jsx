import React from "react";
import { useNavigate } from "react-router-dom";
import headerImage from "../../assets/profile_header.png";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Home");
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
            <li className="flex items-center py-2 font-bold text-[#3D3E3F] cursor-pointer" onClick={handleLogout}>
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
            <button className="text-blue-600 mt-2 bg-none border-none cursor-pointer">Change Picture</button>
            <h1 className="text-xl font-semibold mt-4">Welcome, Kurt Patrick!</h1>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Name</span>
              <span className="flex-1 text-right mr-4">Kurt Patrick Peroche</span>
              <span className="material-icons text-gray-400 cursor-pointer">edit</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Email Address</span>
              <span className="flex-1 text-right mr-4">kurpatper@gmail.com</span>
              <span className="material-icons text-gray-400 cursor-pointer">edit</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Mobile Number</span>
              <span className="flex-1 text-right mr-4">09987562853</span>
              <span className="material-icons text-gray-400 cursor-pointer">edit</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <span className="font-medium">Account Type</span>
              <span className="flex-1 text-right mr-4">Renter</span>
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