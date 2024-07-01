import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Button } from "../../components/buttons/Button";
import ListingBesideMapCards from "../../components/cards/ListingBesideMapCards";
import backgroundImage from "../../assets/FindBg.png";
import mapLogo from "../../assets/mapLogo.png";
<<<<<<< HEAD
//Listing images
import covenantGarden from "../../assets/covenantGarden.png";
import elpueblo from "../../assets/elpueblocondo.png";
=======
import FilterHome from '../../components/filterhome/FilterHome'; // Import the new FilterHome component
import covenantGarden from '../../assets/covenantGarden.png';
import elpueblo from '../../assets/elpueblocondo.png';
>>>>>>> origin/kurt

const FindDorms = () => {
  const [map, setMap] = useState(null);
  const [fromInput, setFromInput] = useState("");
  const [distance, setDistance] = useState(null);
  const [user, setUser] = useState(null);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Price");
  const [selectedPlace, setSelectedPlace] = useState("Type of place");
  const [marker, setMarker] = useState(null);

  const universityCoordinates = {
    "Adamson University": [120.986, 14.6042],
    "Ateneo de Manila University": [121.0777, 14.6407],
    "De La Salle University": [120.9932, 14.5648],
    "De La Salle-College of Saint Benilde": [120.9951, 14.5636],
    "National University, Philippines": [120.9946, 14.6043],
    "Polytechnic University of the Philippines": [121.0108, 14.5979],
    "University of Santo Tomas": [120.9896, 14.6093],
    "University of the Philippines Diliman": [121.0657, 14.6537],
    "University of the Philippines Manila": [120.9918, 14.5806],
    "University of the Philippines System": [121.0657, 14.6537],
  };

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicGVybWFya3kiLCJhIjoiY2x5MW5lNTJzMHRkczJrcHo2NmprZzMwbSJ9.3vlFP5qZY7YBVQcjul9GIg";

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFromInput(parsedUser.university);
    }

    const initializeMap = () => {
      const initialCenter =
        storedUser && universityCoordinates[JSON.parse(storedUser).university]
          ? universityCoordinates[JSON.parse(storedUser).university]
          : [121.774, 12.8797];

      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: initialCenter,
        zoom: 13,
        minZoom: 13,
      });

      mapInstance.addControl(new mapboxgl.NavigationControl());
      mapInstance.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );

      setMap(mapInstance);

      // Create a marker and set its initial position
      const initialMarker = new mapboxgl.Marker()
        .setLngLat(initialCenter)
        .addTo(mapInstance);
      setMarker(initialMarker);
    };

    if (!map) {
      initializeMap();
    }

    return () => map && map.remove();
  }, [map]);

  useEffect(() => {
    if (map && fromInput && universityCoordinates[fromInput]) {
      map.setMaxBounds(null);
      map.setZoom(12);
      marker.setLngLat(universityCoordinates[fromInput]);
      map.setCenter(universityCoordinates[fromInput]);
      map.setMaxBounds(map.getBounds());
    }
  }, [fromInput, map]);

  const handleSetWaypointFromInput = async () => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
  };

  const fetchRoute = async () => {
    const coordinates = universityCoordinates[fromInput];
    if (!coordinates) {
      alert("Please select a valid university.");
      return;
    }

    const route = {
      type: "LineString",
      coordinates: [
        [coordinates[0], coordinates[1]],
        [coordinates[0] + 0.01, coordinates[1] + 0.01],
      ],
    };

    setDistance(1.5);

    if (map.getSource("route")) {
      map.getSource("route").setData({
        type: "Feature",
        geometry: route,
      });
    } else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: route,
          },
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
        },
      });
    }
  };

  const clearRoute = () => {
    setDistance(null);
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
  };

  const dummyListings = [
    {
      id: 1,
      image: covenantGarden,
      title: "Covent Garden Sta. Mesa Condo for Rent near PUP & UERM",
      details:
        "4-6 guests · Entire Condo · 6 beds · Shared bath · Wifi · Kitchen · Free Parking",
      price: "Php 5,680 /month",
      rating: 5.0,
      reviews: 318,
    },
    {
      id: 2,
      image: elpueblo,
      title: "El Pueblo Condo For Rent",
      details: "4-6 persons · Entire Room · 4 beds · 1 bath · Wifi · Kitchen",
      price: "Php 6,755 /month",
      rating: 5.0,
      reviews: 318,
    },
    {
      id: 2,
      image: elpueblo,
      title: "El Pueblo Condo For Rent",
      details: "4-6 persons · Entire Room · 4 beds · 1 bath · Wifi · Kitchen",
      price: "Php 6,755 /month",
      rating: 5.0,
      reviews: 318,
    },
    {
      id: 2,
      image: elpueblo,
      title: "El Pueblo Condo For Rent",
      details: "4-6 persons · Entire Room · 4 beds · 1 bath · Wifi · Kitchen",
      price: "Php 6,755 /month",
      rating: 5.0,
      reviews: 318,
    },
    {
      id: 2,
      image: elpueblo,
      title: 'El Pueblo Condo For Rent',
      details: '4-6 persons · Entire Room · 4 beds · 1 bath · Wifi · Kitchen',
      price: 'Php 6,755 /month',
      rating: 5.0,
      reviews: 318,
    },
    // Add more dummy listings as needed
  ];

  return (
    <div className="w-full font-poppins bg-blue-50 min-h-screen">
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome to PahingaU!</h2>
          {user && <p className="text-xl">Logged in as: {user.email}</p>}
        </div>

        <div className="mb-8">
          <div className="max-w-3xl mx-auto flex items-center bg-white rounded-full shadow-md">
            {user && (
              <select
                className="flex-grow px-6 py-3 text-xl text-[#1A1A1A] rounded-l-full focus:outline-none"
                value={fromInput}
                onChange={(e) => setFromInput(e.target.value)}
              >
<<<<<<< HEAD
                <option value="" disabled>
                  Select University
                </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
=======
                <option value="" disabled>Select University</option>
                {Object.keys(universityCoordinates).map((option) => (
                  <option key={option} value={option}>{option}</option>
>>>>>>> origin/kurt
                ))}
              </select>
            )}
            <button
              className="mx-2 text-[#1A1A1A] hover:bg-gray-100 p-3 rounded-full"
              onClick={handleSetWaypointFromInput}
            >
              <img src={mapLogo} className="w-6 h-6" alt="Map Logo" />
            </button>
            <Button
              variant="solidm"
              onClick={fetchRoute}
              className="rounded-r-full"
            >
              Search
            </Button>
          </div>
        </div>

<<<<<<< HEAD
        {/* Filter Section */}
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
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                />
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
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                />
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

          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Internet
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Elevator
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Aircon
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Study Hub
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Community Area
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Kitchen
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Swimming Pool
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow text-sm">
            Filters
          </button>
        </div>

        <div className="mb-16 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div
              id="map"
              className="h-[600px] w-full rounded-lg shadow-md"
            ></div>
=======
        {/* Use the FilterHome component */}
        <FilterHome
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          showPriceDropdown={showPriceDropdown}
          setShowPriceDropdown={setShowPriceDropdown}
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          showPlaceDropdown={showPlaceDropdown}
          setShowPlaceDropdown={setShowPlaceDropdown}
        />

        <div className="mb-16 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div id="map" className="h-[600px] w-full rounded-lg shadow-md"></div>
>>>>>>> origin/kurt
          </div>
          <div
            className="lg:w-1/2 overflow-y-auto"
            style={{ maxHeight: "600px" }}
          >
            {dummyListings.map((listing) => (
              <ListingBesideMapCards key={listing.id} {...listing} />
            ))}
          </div>
        </div>

        {distance !== null && (
          <div className="mt-4 p-4 bg-white text-black rounded-lg shadow-lg">
            <p>
              <strong>Distance:</strong> {distance.toFixed(2)} km
            </p>
            <Button variant="solidm" onClick={clearRoute} className="mt-2">
              Clear Route
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default FindDorms;
