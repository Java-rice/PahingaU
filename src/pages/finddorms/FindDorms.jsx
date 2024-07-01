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
  const [waypoints, setWaypoints] = useState([]);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicGVybWFya3kiLCJhIjoiY2x5MW5lNTJzMHRkczJrcHo2NmprZzMwbSJ9.3vlFP5qZY7YBVQcjul9GIg";

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [121.774, 12.8797],
        zoom: 6,
      });

      mapInstance.addControl(new mapboxgl.NavigationControl());
      mapInstance.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
        })
      );

      mapInstance.on("click", handleMapClick);

      setMap(mapInstance);
    };

    if (!map) {
      initializeMap();
    }

    return () => map && map.remove(); // Clean up the map instance
  }, [map]);

  const handleMapClick = (e) => {
    setWaypoints((prevWaypoints) => [
      ...prevWaypoints,
      {
        label: prevWaypoints.length === 0 ? "From" : "To",
        coordinates: [e.lngLat.lng, e.lngLat.lat],
      },
    ]);
  };

  const handleSetWaypointFromInput = async (type) => {
    const input = type === "from" ? fromInput : toInput;
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    const response = await geocoder.query({ query: input });
    const coordinates = response && response.features && response.features.length > 0 ? response.features[0].center : null;

    if (coordinates) {
      setWaypoints((prevWaypoints) => [
        ...prevWaypoints,
        { label: type === "from" ? "From" : "To", coordinates },
      ]);
    } else {
      alert("Location not found");
    }
  };

  const fetchRoute = async () => {
    if (waypoints.length < 2) {
      alert("Please set both From and To waypoints.");
      return;
    }

    const from = waypoints.find((w) => w.label === "From").coordinates;
    const to = waypoints.find((w) => w.label === "To").coordinates;

    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${from[0]},${from[1]};${to[0]},${to[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
    );
    const data = await response.json();

    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0].geometry;
      setDistance(data.routes[0].distance / 1000); // distance in kilometers

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
    }
  };

  const clearWaypoints = () => {
    setWaypoints([]);
    setDistance(null);
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
  };

  return (
    <div
      className="w-full font-poppins bg-cover min-h-screen bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-auto mx-auto py-[10%] text-white flex flex-col gap-5 justify-center items-center text-wrap">
        <div className="w-[60%] flex px-[2%] bg-[#FFFFFF] rounded-full py-[.2%] border border-[#E9E9E9] flex-row justify-center items-center">
          
          <input
            type="text"
            placeholder="Where do you want to stay?"
            className="flex-grow px-4 py-2 text-xl text-[#1A1A1A] border rounded-full border-[#E9E9E9] focus:outline-none"
            value={fromInput}
            onChange={(e) => setFromInput(e.target.value)}
          />
          <button
            className="mx-2 text-[#1A1A1A] border rounded-full hover:bg-[#2196F3] border-[#E9E9E9] px-5 py-2 hover:text-gray-600"
            onClick={() => handleSetWaypointFromInput("from")}
          >
            <img src={mapLogo} className="w-6 h-6" alt="Map Logo" />
          </button>
          <input
            type="text"
            placeholder="Destination"
            className="flex-grow px-4 py-2 text-xl text-[#1A1A1A] border rounded-full border-[#E9E9E9] focus:outline-none"
            value={toInput}
            onChange={(e) => setToInput(e.target.value)}
          />
          <button
            className="mx-2 text-[#1A1A1A] border rounded-full hover:bg-[#2196F3] border-[#E9E9E9] px-5 py-2 hover:text-gray-600"
            onClick={() => handleSetWaypointFromInput("to")}
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
        {waypoints.length > 0 && (
          <div className="mt-4 p-2 bg-white text-black rounded-lg shadow-lg">
            {waypoints.map((waypoint, index) => (
              <p key={index}>
                <strong>{waypoint.label}:</strong>{" "}
                {waypoint.coordinates[1].toFixed(4)},{" "}
                {waypoint.coordinates[0].toFixed(4)}
              </p>
            ))}
            <Button variant="solidm" onClick={clearWaypoints}>
              Clear Waypoints
            </Button>
          </div>
        )}
        {distance !== null && (
          <div className="mt-4 p-2 bg-white text-black rounded-lg shadow-lg">
            <p>
              <strong>Distance:</strong> {distance.toFixed(2)} km
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDorms;
