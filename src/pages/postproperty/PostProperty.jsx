import React, { useState } from "react";
import { Button } from "../../components/buttons/Button";

const PostProperty = () => {
  const [selectedDormType, setSelectedDormType] = useState("");
  const [selectedBathroom, setSelectedBathroom] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
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
        <div className="flex pt-10 sm:pt-[30%] pb-20 sm:pb-[20%] flex-col justify-center gap-5 text-center">
          <Button variant="black">HOW IT WORKS</Button>
          <h1 className="w-full sm:w-3/4 font-poppins m-auto text-4xl sm:text-6xl font-regular leading-tight sm:leading-[78px] text-center">
            Knock on the Right Door in 3 Easy Steps!
          </h1>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Dorm Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Dorm Details
          </h2>
          <label className="block mb-2 text-gray-700">Dorm Name</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="text"
            placeholder="Dorm Name"
          />
          <label className="block mb-2 text-gray-700">Description</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded mb-4"
            placeholder="Description"
          ></textarea>
        </div>
        {/* Property Address */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Property Address
          </h2>
          <label className="block mb-2 text-gray-700">Address Line</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="text"
            placeholder="Address Line"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-700">Province</label>
              <input
                className="w-full border border-gray-300 p-2 rounded mb-4"
                type="text"
                placeholder="Province"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">City</label>
              <input
                className="w-full border border-gray-300 p-2 rounded mb-4"
                type="text"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Barangay</label>
              <input
                className="w-full border border-gray-300 p-2 rounded mb-4"
                type="text"
                placeholder="Barangay"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Postal Code</label>
              <input
                className="w-full border border-gray-300 p-2 rounded mb-4"
                type="text"
                placeholder="Postal Code"
              />
            </div>
          </div>
        </div>
        {/* Dorm Type */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Dorm Type</h2>
          <div className="flex space-x-4">
            {["Studio", "Room", "Penthouse"].map((type) => (
              <button
                key={type}
                className={`border p-2 rounded ${
                  selectedDormType === type
                    ? "border-purple-600 text-purple-600"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedDormType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Bathroom */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Bathroom</h2>
          <div className="flex space-x-4">
            {["Private", "Shared"].map((bathroom) => (
              <button
                key={bathroom}
                className={`border p-2 rounded ${
                  selectedBathroom === bathroom
                    ? "border-purple-600 text-purple-600"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedBathroom(bathroom)}
              >
                {bathroom}
              </button>
            ))}
          </div>
        </div>
        {/* Allowed Gender */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Allowed Gender</h2>
          <div className="flex space-x-4">
            {["Male", "Female", "Welcome to All"].map((gender) => (
              <button
                key={gender}
                className={`border p-2 rounded ${
                  selectedGender === gender
                    ? "border-purple-600 text-purple-600"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => setSelectedGender(gender)}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
        {/* Pricing */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Pricing</h2>
          <label className="block mb-2 text-gray-700">Rental space amount in Php</label>
          <input
            className="w-full border border-gray-300 p-2 rounded mb-4"
            type="text"
            placeholder="Rental space amount in Php"
          />
        </div>
        {/* Space Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Tell us more about the space
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Internet",
              "Elevator",
              "Aircon",
              "Study Hub",
              "Community Area",
              "Recreational Area",
              "Fitness Gym",
              "Swimming Pool",
              "Kitchen",
            ].map((amenity) => (
              <button
                key={amenity}
                className={`border p-2 rounded ${
                  selectedAmenities.includes(amenity)
                    ? "border-purple-600 text-purple-600"
                    : "border-gray-300 text-gray-600"
                }`}
                onClick={() => toggleAmenity(amenity)}
              >
                {amenity}
              </button>
            ))}
          </div>
        </div>
        {/* Upload Photos */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Upload Photos</h2>
          <div className="border-dashed border-2 border-gray-300 p-8 text-center rounded-lg">
            <p className="text-gray-600">Drop your media here</p>
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
          <button className="bg-purple-600 text-white p-3 rounded">Submit</button>
        </div>
      </div>
    </>
  );
};

export default PostProperty;