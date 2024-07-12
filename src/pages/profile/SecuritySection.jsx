import React from 'react';

const SecuritySection = ({ user }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-10 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Security</h2>

      {/* Change Password Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
        <div className="space-y-2">
          <input
            type="password"
            placeholder="Old Password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            disabled 
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            disabled
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            disabled
          />
          <p className="text-xs text-gray-500">
            Your new password must be different to previously used passwords.
          </p>
        </div>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
        <p className="text-sm text-gray-500 mb-2">
          Get verification codes from an authenticator app such as Google Authenticator. It works even if your phone is offline. 
        </p>
        {/* QR Code Placeholder */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gray-200"></div>
          <input
            type="text"
            placeholder="Enter verification code"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            disabled
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
          disabled
        >
          Enable TFA 
        </button>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" disabled>
        Save Changes
      </button>
    </div>
  );
};

export default SecuritySection;
