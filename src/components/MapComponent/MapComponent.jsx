import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Marker sozlash
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

function MapComponent({ className = "" }) {
  return (
    <div
      className={`w-full h-[400px] border-2 border-pink-500 my-10 ${className}`}
    >
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={4}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[48.8566, 2.3522]}>
          <Popup>Paris, France</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
