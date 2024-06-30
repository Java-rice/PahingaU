// src/components/cards/UnivCards.jsx
import React from 'react';

const UnivCards = ({ univName, location, backgroundImage }) => {
  return (
    <div
      className="relative w-[221px] h-[274px] rounded-[16px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(101, 31, 255, 1), rgba(26, 26, 26, 0.1), rgba(0, 0, 0, 0)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0077B5] to-transparent p-4">
        <h2 className="text-white font-poppins font-bold text-xl mb-2">{univName}</h2>
        <p className="text-white font-poppins">{location}</p>
      </div>
    </div>
  );
};

export default UnivCards;
