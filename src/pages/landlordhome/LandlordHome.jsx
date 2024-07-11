// src/pages/landlordhome/LandlordHome.jsx
import React from 'react';
import { FaHome, FaUser, FaClipboardList, FaComments, FaSignOutAlt, FaUsers, FaSearch, FaBuilding, FaCalendar } from 'react-icons/fa';

const LandlordHome = () => {
  return (
    <div className="flex h-screen mt-20">
      <div className="w-1/5 bg-gradient-to-b from-blue-100 to-blue-200 p-4">
        <ul className="space-y-4">
          <li className="text-blue-600 font-bold flex items-center">
            <FaHome className="mr-2" />
            Homepage
          </li>
          <li className="text-zinc-700 flex items-center">
            <FaUser className="mr-2" />
            Profile
          </li>
          <li className="text-zinc-700 flex items-center">
            <FaClipboardList className="mr-2" />
            Manage Listings
          </li>
          <li className="text-zinc-700 flex items-center">
            <FaComments className="mr-2" />
            Messages
          </li>
          <li className="text-zinc-700 flex items-center">
            <FaSignOutAlt className="mr-2" />
            Logout
          </li>
        </ul>
      </div>

      <div className="w-4/5 p-8">
        <div className="bg-gradient-to-r from-blue-400 to-teal-400 text-white text-center py-4 rounded-lg mb-8">+ Post Your Property</div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <div className="text-zinc-700">Potential Leads</div>
              <div className="text-2xl font-bold">17054</div>
            </div>
            <FaUsers className="text-2xl text-blue-500" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <div className="text-zinc-700">Total Leads</div>
              <div className="text-2xl font-bold">0</div>
            </div>
            <FaSearch className="text-2xl text-blue-500" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <div className="text-zinc-700">Total Active Listings</div>
              <div className="text-2xl font-bold">1</div>
            </div>
            <FaBuilding className="text-2xl text-blue-500" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <div className="text-zinc-700">Upcoming Visits</div>
              <div className="text-2xl font-bold">0</div>
            </div>
            <FaCalendar className="text-2xl text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordHome;