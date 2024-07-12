import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import MessageSection from "./MessageSection";
import SecuritySection from "./SecuritySection";
import BookmarksSection from "./BookmarksSection";
import ToReviewSection from "./ToReviewSection";
import VisitSection from "./VisitSection";

import "./Profile.css";

const ProfileContent = ({ user }) => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<ProfileSection user={user} />} />
        <Route path="ProfileSection" element={<ProfileSection user={user} />} />
        <Route path="MessageSection" element={<MessageSection user={user}/>} />
        <Route path="SecuritySection" element={<SecuritySection user={user} />} />
        <Route path="BookmarksSection" element={<BookmarksSection user={user}/>} />
        <Route path="ToReviewSection" element={<ToReviewSection user={user} />} />
        <Route path="VisitSection" element={<VisitSection user={user}/>} />
      </Routes>
    </div>
  );
};

export default ProfileContent;
