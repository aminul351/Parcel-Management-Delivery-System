import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

// Marker Icon
const activeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});





// moves the map
const FlyToLocation = ({ position }) => {
  const map = useMap();

  if (position) {
    map.flyTo(position, 12, {
      duration: 2,
    });
  }

  return null;
};


const Coverage = () => {

  const coverageData = useLoaderData()

  const [searchText, setSearchText] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleSearch = () => {
    const foundLocation = coverageData.find(
      (location) =>
        location.district.toLowerCase() === searchText.toLowerCase()
    );

    if (foundLocation) {
      setSelectedPosition([
        foundLocation.latitude,
        foundLocation.longitude,
      ]);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 district
      </h1>

      {/* Search Section */}
      <div className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter district name..."
          className="input input-bordered w-64"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <MapContainer
        center={[23.6850, 90.3563]}
        zoom={7}
        className="h-[600px] w-full rounded-xl"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Move Map When Found */}
        {selectedPosition && (
          <FlyToLocation position={selectedPosition} />
        )}

        {/* Markers */}
        {coverageData.map((location, index) =>
          location.status === "active" ? (
            <Marker
              key={index}
              position={[location.latitude, location.longitude]}
              icon={activeIcon}
            >
              <Popup>
                <strong>{location.city}</strong>
                <br />
                We are available on {location.district}
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
};

export default Coverage;
