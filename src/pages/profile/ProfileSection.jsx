import React, { useState } from "react";
import axios from "axios";

const ProfileSection = ({ user }) => {
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || "https://placehold.co/100x100");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleChangePicture = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a valid image (JPEG, PNG, or GIF).");
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', file);
    formData.append('userId', user.id);
    formData.append('isLandlord', user.university ? 'false' : 'true');

    setUploading(true);
    setError('');

    axios.post('http://localhost:3001/api/upload-profile-picture', formData)
      .then(response => {
        setProfilePicture(response.data.profilePicture);
      })
      .catch(error => {
          if (error.response && error.response.status === 400) {
            setError(error.response.data.error);
          } else {
            setError("An unexpected error occurred.");
          }
        })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <div>
      <div className="profile-details">
        <img
          className="profile-picture"
          src={profilePicture}
          alt="User Profile Picture"
          style={{ borderRadius: '50%', width: '100px', height: '100px' }}
        />
        <input
          type="file"
          id="profilePictureInput"
          style={{ display: 'none' }}
          onChange={handleChangePicture}
        />
        <button
          className="change-picture"
          onClick={() => document.getElementById('profilePictureInput').click()}
        >
          Change Picture
        </button>
        {uploading && <p>Uploading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && (
          <h1 className="text-xl font-semibold mt-4">
            Welcome, {user.fullName}!
          </h1>
        )}
      </div>
      <div className="profile-info">
        <div className="info-item">
          <span className="info-label">Name</span>
          {user && <h1 className="flex-1 text-right mr-4">{user.fullName}</h1>}
          <span className="material-icons edit-icon">edit</span>
        </div>
        <div className="info-item">
          <span className="info-label">Email Address</span>
          {user && <h1 className="flex-1 text-right mr-4">{user.email}</h1>}
          <span className="material-icons edit-icon">edit</span>
        </div>
        <div className="info-item">
          <span className="info-label">Mobile Number</span>
          {user && <h1 className="flex-1 text-right mr-4">{user.phoneNumber}</h1>}
          <span className="material-icons edit-icon">edit</span>
        </div>
        <div className="info-item">
          <span className="info-label">Account Type</span>
          <span className="flex-1 text-right mr-4">
            {user && (user.university ? "Renter" : "Landowner")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
