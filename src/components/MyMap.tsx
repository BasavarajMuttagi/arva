import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation";

const MyMap = () => {
  const { position } = useGeoLocation();

  return (
    <div className="h-52 rounded p-1">
      <MapContainer
        center={[position.latitude, position.longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[position.latitude, position.longitude]}>
          <Popup>{[position.latitude, position.longitude]}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
