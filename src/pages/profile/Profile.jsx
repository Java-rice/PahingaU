import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Profile.css";
import ProfileContent from "./ProfileContent";

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
    window.location.reload();
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="sidebar">
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="ProfileSection" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">person</span>
                <span>Profile</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="BookmarksSection" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">bookmark</span>
                <span>Bookmarks</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="visits" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">event</span>
                <span>Visits</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="to-review" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">rate_review</span>
                <span>To Review</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="security" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">security</span>
                <span>Security</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="MessageSection" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="material-icons">message</span>
                <span>Messages</span>
              </NavLink>
            </li>
            <li className="menu-item" onClick={handleLogout}>
              <span className="material-icons">logout</span>
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <ProfileContent user={user} />
      </div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </div>
  );
};

export default Profile;
