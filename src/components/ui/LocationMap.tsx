import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export const LocationMap = () => {
  return (
    <MapContainer center={[-23.5641095, -46.6524099]} zoom={15} scrollWheelZoom={false} className="w-full h-full z-0 grayscale contrast-125">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-23.5641095, -46.6524099]}>
        <Popup>
          <span className="font-sans font-bold text-primary">Tayna C. B. Oliveira Advocacia</span><br />
          Av. Paulista, 1000 — 12º Andar
        </Popup>
      </Marker>
    </MapContainer>
  );
};
