import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import MessageSection from "./MessageSection";

import "./Profile.css";

const ProfileContent = ({ user }) => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<ProfileSection user={user} />} />
        <Route path="ProfileSection" element={<ProfileSection user={user} />} />
        <Route path="MessageSection" element={<MessageSection />} />
      </Routes>
    </div>
  );
};

export default ProfileContent;