import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { Button } from "../../components/buttons/Button";
import backgroundImage from "../../assets/FindBg.png";
import mapLogo from "../../assets/mapLogo.png";

const FindDorms = () => {
  const [map, setMap] = useState(null);
  const [fromInput, setFromInput] = useState("");
  const [distance, setDistance] = useState(null);
  const [user, setUser] = useState(null);

  const universityCoordinates = {
    "Adamson University": [120.986, 14.6042],
    "Ateneo de Manila University": [121.0777, 14.6407],
    "De La Salle University": [120.9943, 14.5649],
    "De La Salle-College of Saint Benilde": [120.9919, 14.5633],
    "National University, Philippines": [120.9891, 14.6052],
    "Polytechnic University of the Philippines": [121.0164, 14.5986],
    "University of Santo Tomas": [120.9896, 14.6093],
    "University of the Philippines Diliman": [121.0657, 14.6537],
    "University of the Philippines Manila": [120.9918, 14.5806],
    "University of the Philippines System": [121.0657, 14.6537], // Assuming UP Diliman as the main campus
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
        zoom: 15,
        minZoom: 15,
      });

      mapInstance.addControl(new mapboxgl.NavigationControl());
      mapInstance.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );

      setMap(mapInstance);
    };

    if (!map) {
      initializeMap();
    }

    return () => map && map.remove();
  }, [map]);

  useEffect(() => {
    if (map && fromInput && universityCoordinates[fromInput]) {
      map.setMaxBounds(null);
      map.setZoom(15);
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

    // Simulating fetching route data from API
    const route = {
      type: "LineString",
      coordinates: [
        [coordinates[0], coordinates[1]],
        [coordinates[0] + 0.01, coordinates[1] + 0.01], // Example route coordinates
      ],
    };

    setDistance(1.5); // Example distance

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

  const options = [
    "Adamson University",
    "Ateneo de Manila University",
    "De La Salle University",
    "De La Salle-College of Saint Benilde",
    "National University, Philippines",
    "Polytechnic University of the Philippines",
    "University of Santo Tomas",
    "University of the Philippines Diliman",
    "University of the Philippines Manila",
    "University of the Philippines System",
  ];

  return (
    <div
      className="w-full font-poppins bg-cover min-h-screen bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-auto mx-auto py-[10%] text-white flex flex-col gap-5 justify-center items-center text-wrap">
        <div className="text-center text-black">
          <h1 className="text-2xl font-bold mb-4">Welcome to PahingaU!</h1>
          {user && (
            <>
              <p className="text-xl">Logged in as: {user.email}</p>
            </>
          )}
        </div>
        <div className="w-[60%] flex px-[2%] bg-[#FFFFFF] rounded-full py-[.2%] border border-[#E9E9E9] flex-row justify-center items-center">
          {user && (
            <select
              className="flex-grow px-4 py-2 text-xl text-[#1A1A1A] border rounded-full border-[#E9E9E9] focus:outline-none"
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
            >
              <option value="" disabled>
                Select University
              </option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          <button
            className="mx-2 text-[#1A1A1A] border rounded-full hover:bg-[#2196F3] border-[#E9E9E9] px-5 py-2 hover:text-gray-600"
            onClick={handleSetWaypointFromInput}
          >
            <img src={mapLogo} className="w-6 h-6" alt="Map Logo" />
          </button>
          <Button variant="solidm" onClick={fetchRoute}>
            Search
          </Button>
        </div>
        <div className="w-[80%] h-[500px] mt-5">
          <div id="map" style={{ height: "100%", width: "100%" }}></div>
        </div>
        {distance !== null && (
          <div className="mt-4 p-2 bg-white text-black rounded-lg shadow-lg">
            <p>
              <strong>Distance:</strong> {distance.toFixed(2)} km
            </p>
            <Button variant="solidm" onClick={clearRoute}>
              Clear Route
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDorms;
