import React, { useState } from "react";
import { Button } from "../../components/buttons/Button";

const PostProperty = () => {
  const [selectedDormType, setSelectedDormType] = useState("");
  const [selectedBathroom, setSelectedBathroom] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prevAmenities) =>
      prevAmenities.includes(amenity)
        ? prevAmenities.filter((item) => item !== amenity)
        : [...prevAmenities, amenity]
    );
  };

  return (
    <>
      <div className="w-full px-4 sm:px-[10%] font-poppins">
        <div className="flex sm:pt-[30%] pb-10 sm:pb-[20%] flex-col justify-center gap-5 text-center">
          <Button variant="black">POST MY PROPERTY</Button>
          <h1 className="w-full sm:w-3/4 font-poppins m-auto text-4xl sm:text-6xl font-regular leading-tight sm:leading-[78px] text-center">
            Post Your Property, Open Resting Place with PahingaU
          </h1>
        </div>
      </div>
      <div className="bg-white mx-[10%] p-[5%] mb-[10%] rounded-lg shadow-md"
         style={{ boxShadow: '17px 8px 40.8px 6px #00000040' }}>
        {/* Property Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">
            Property Details
          </h2>
          <label className="block mb-2 text-gray-700">Title</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="text"
            placeholder="Title"
          />
          <label className="block mb-2 text-gray-700">Description</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded mb-4"
            placeholder="Description"
          ></textarea>
          <label className="block mb-2 text-gray-700">Latitude</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="text"
            placeholder="Latitude"
          />
          <label className="block mb-2 text-gray-700">Longitude</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="text"
            placeholder="Longitude"
          />
          <label className="block mb-2 text-gray-700">Address</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="text"
            placeholder="Address"
          />
        </div>
        {/* Housing Type */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">
            Housing Type
          </h2>
          <div className="flex space-x-4">
            {["Individual", "Group", "Shared"].map((type) => (
              <button
                key={type}
                className={`border p-2 rounded ${
                  selectedDormType === type
                    ? "border-[#0077B5] text-[#0077B5]"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedDormType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Persons */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">
            Persons
          </h2>
          <label className="block mb-2 text-gray-700">Min Persons</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="number"
            placeholder="Min Persons"
          />
          <label className="block mb-2 text-gray-700">Max Persons</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="number"
            placeholder="Max Persons"
          />
        </div>
        {/* Leasing Option */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">
            Leasing Option
          </h2>
          <div className="flex space-x-4">
            {["Monthly", "Mid-term", "Yearly"].map((option) => (
              <button
                key={option}
                className={`border p-2 rounded ${
                  selectedBathroom === option
                    ? "border-[#0077B5] text-[#0077B5]"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedBathroom(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        {/* Bedrooms */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">Bedrooms</h2>
          <label className="block mb-2 text-gray-700">Number of Bedrooms</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="number"
            placeholder="Number of Bedrooms"
          />
        </div>
        {/* Kitchen */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">Kitchen</h2>
          <div className="flex space-x-4">
            {["Yes", "No"].map((kitchen) => (
              <button
                key={kitchen}
                className={`border p-2 rounded ${
                  selectedBathroom === kitchen
                    ? "border-[#0077B5] text-[#0077B5]"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedBathroom(kitchen)}
              >
                {kitchen}
              </button>
            ))}
          </div>
        </div>
        {/* Bathroom */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">Bathroom</h2>
          <div className="flex space-x-4">
            {["Shared", "Own"].map((bathroom) => (
              <button
                key={bathroom}
                className={`border p-2 rounded ${
                  selectedBathroom === bathroom
                    ? "border-[#0077B5] text-[#0077B5]"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedBathroom(bathroom)}
              >
                {bathroom}
              </button>
            ))}
          </div>
        </div>
        {/* Amenities */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">
            Amenities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Internet",
              "Elevator",
              "Aircon",
              "Study Hub",
              "Community Area",
              "Kitchen",
              "Swimming Pool",
              "Fitness Gym",
              "Recreational Area",
              "Pet Friendly",
              "Security Cameras",
            ].map((amenity) => (
              <button
                key={amenity}
                className={`border p-2 rounded ${
                  selectedAmenities.includes(amenity)
                    ? "border-[#0077B5] text-[#0077B5]"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => toggleAmenity(amenity)}
              >
                {amenity}
              </button>
            ))}
          </div>
        </div>
        {/* Pricing */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">Pricing</h2>
          <label className="block mb-2 text-gray-700">Price Per Month</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="number"
            placeholder="Price Per Month"
          />
        </div>
        {/* Upload Photos */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0077B5] mb-4">Upload Photos</h2>
          <div className="border-dashed border-2 border-gray-300 p-8 text-center rounded-lg">
            <p className="text-gray-600">Drop your media here</p>
            <input type="file" multiple className="hidden" />
          </div>
        </div>
        {/* Agreement */}
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-[#0077B5] text-white p-3 rounded">Submit</button>
        </div>
      </div>
    </>
  );
};

export default PostProperty;
