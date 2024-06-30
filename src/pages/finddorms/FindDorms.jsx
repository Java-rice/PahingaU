import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "../../components/buttons/Button";
import backgroundImage from "../../assets/FindBg.png";
import mapLogo from "../../assets/mapLogo.png";

const LocationMarker = ({ waypoints, setWaypoints }) => {
  const [position, setPosition] = useState(null);

  const handleMapClick = (e) => {
    setPosition(e.lngLat);
  };

  const handleSetWaypoint = (label) => {
    if (position) {
      setWaypoints(prevWaypoints => [...prevWaypoints, { label, coordinates: [position.lng, position.lat] }]);
    }
  };

  return position === null ? null : (
    <mapboxgl.Marker
      key={position.toString()}
      coordinates={position}
    >
      <mapboxgl.Popup>
        <p>Coordinates: {position.lat.toFixed(4)}, {position.lng.toFixed(4)}</p>
        <Button variant="solidm" onClick={() => handleSetWaypoint('From')}>Set as From</Button>
        <Button variant="solidm" onClick={() => handleSetWaypoint('To')}>Set as To</Button>
      </mapboxgl.Popup>
    </mapboxgl.Marker>
  );
};

const FindDorms = () => {
  const [showMap, setShowMap] = useState(false);
  const [waypoints, setWaypoints] = useState([]);

  const handleMapClick = () => {
    setShowMap(!showMap);
  };

  const clearWaypoints = () => {
    setWaypoints([]);
  };

  // Initialize map
  useEffect(() => {
    if (showMap) {
      mapboxgl.accessToken = 'pk.eyJ1IjoicGVybWFya3kiLCJhIjoiY2x5MW5lNTJzMHRkczJrcHo2NmprZzMwbSJ9.3vlFP5qZY7YBVQcjul9GIg'; // Replace with your Mapbox access token
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [121.7740, 12.8797],
        zoom: 6
      });

      map.on('click', (e) => {
        handleMapClick(e);
      });

      return () => map.remove(); // Clean up the map instance
    }
  }, [showMap]);

  return (
    <div className="w-full font-poppins bg-cover min-h-screen bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-auto mx-auto py-[10%] text-white flex flex-col gap-5 justify-center items-center text-wrap">
        <div className="w-[60%] flex px-[2%] bg-[#FFFFFF] rounded-full py-[.2%] border border-[#E9E9E9] flex-row justify-center items-center">
          <input
            type="text"
            placeholder="Where do you want to stay?"
            className="flex-grow px-4 py-2 text-xl text-[#1A1A1A] border rounded-full border-[#E9E9E9] focus:outline-none"
          />
          <button
            className="mx-2 text-[#1A1A1A] border rounded-full hover:bg-[#2196F3] border-[#E9E9E9] px-5 py-2 hover:text-gray-600"
            onClick={handleMapClick}
          >
            <img src={mapLogo} className="w-6 h-6" alt="Map Logo" />
          </button>
          <Button variant="solidm">Search</Button>
        </div>
        {showMap && (
          <div className="w-[80%] h-[500px] mt-5">
            <div id="map" style={{ height: '100%', width: '100%' }}></div>
            <LocationMarker waypoints={waypoints} setWaypoints={setWaypoints} />
            {waypoints.length > 0 && (
              <div className="mt-4 p-2 bg-white text-black rounded-lg shadow-lg">
                {waypoints.map((waypoint, index) => (
                  <p key={index}><strong>{waypoint.label}:</strong> {waypoint.coordinates[1].toFixed(4)}, {waypoint.coordinates[0].toFixed(4)}</p>
                ))}
                <Button variant="solidm" onClick={clearWaypoints}>Clear Waypoints</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDorms;
