import L from "leaflet";
import "leaflet/dist/leaflet.css";
//import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect } from "react";

const position = [40.7128, -74.006]; // Example: New York

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapSection = () => {
  useEffect(() => {
    // Trigger resize to fix render issues
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }, []);

  return (
    <div className="w-full h-[600px] md:h-[500px] sm:h-[400px] xs:h-[300px] relative">
      {/* <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            E-Shop HQ <br />
            123 Main Street
          </Popup>
        </Marker>
      </MapContainer> */}

      {/* Location Card */}
      <div className="absolute top-6 left-6 bg-white shadow-lg rounded-xl p-4 w-[280px] sm:w-[240px]">
        <h2 className="font-semibold text-gray-800 text-lg sm:text-base">
          E-Shop Headquarter
        </h2>
        <p className="text-gray-600 text-sm">
          123 Main Street, Anytown
          <br />
          New York, USA
        </p>
        <a
          href="https://www.google.com/maps?q=40.7128,-74.006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline mt-2 inline-block text-sm"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapSection;
