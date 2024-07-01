// src/pages/home/Home.jsx
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to PahingaU!</h1>
        {user && (
          <>
            <p className="text-xl">Logged in as: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>University: {user.university}</p>
            <p>Social Status: {user.socialStatus}</p>
            <p>Phone: {user.phone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
