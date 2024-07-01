import React, { useState } from 'react';

const FilterHome = ({
  selectedPrice,
  setSelectedPrice,
  showPriceDropdown,
  setShowPriceDropdown,
  selectedPlace,
  setSelectedPlace,
  showPlaceDropdown,
  setShowPlaceDropdown,
}) => {
  return (
    <div className="mb-16 flex flex-wrap gap-2 justify-center">
      {/* Price Dropdown */}
      <div className="relative">
        <button 
          className="px-4 py-2 bg-white rounded-full shadow text-sm flex items-center"
          onClick={() => setShowPriceDropdown(!showPriceDropdown)}
        >
          {selectedPrice}
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
        {showPriceDropdown && (
          <div className="absolute z-50 w-48 mt-2 rounded-lg shadow-lg bg-white left-1/2 transform -translate-x-1/2">
            <ul className="py-2">
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedPrice("Low to High");
                  setShowPriceDropdown(false);
                }}
              >
                Low to High
              </li>
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedPrice("High to Low");
                  setShowPriceDropdown(false);
                }}
              >
                High to Low
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="relative">
        <button 
          className="px-4 py-2 bg-white rounded-full shadow text-sm flex items-center"
          onClick={() => setShowPlaceDropdown(!showPlaceDropdown)}
        >
          {selectedPlace}
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
        {showPlaceDropdown && (
          <div className="absolute z-50 w-48 mt-2 rounded-lg shadow-lg bg-white left-1/2 transform -translate-x-1/2">
            <ul className="py-2">
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedPlace("Entire place");
                  setShowPlaceDropdown(false);
                }}
              >
                Entire place
              </li>
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedPlace("Private room");
                  setShowPlaceDropdown(false);
                }}
              >
                Private room
              </li>
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedPlace("Shared room");
                  setShowPlaceDropdown(false);
                }}
              >
                Shared room
              </li>
            </ul>
          </div>
        )}
      </div>

      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Internet</button>
      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Elevator</button>
      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Aircon</button>
      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Study Hub</button>
      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Community Area</button>
      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Kitchen</button>
      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Swimming Pool</button>
      <button className="px-4 py-2 bg-white rounded-full shadow text-sm">Filters</button>
    </div>
  );
};

export default FilterHome;
