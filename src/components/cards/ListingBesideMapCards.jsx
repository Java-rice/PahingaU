// src/components/cards/ListingBesideMapCards.jsx
import React from 'react';

const ListingBesideMapCards = ({ image, title, details, price, rating, reviews }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="md:w-1/3">
        <img src={image} alt={title} className="w-full h-48 md:h-full object-cover" />
      </div>
      <div className="p-4 md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{details}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span>{rating}</span>
            <span className="text-gray-500 ml-1">({reviews} reviews)</span>
          </div>
          <div className="font-bold text-lg">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingBesideMapCards;