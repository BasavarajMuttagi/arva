import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation";
import { useEffect, useRef, useState } from "react";

const MyMap = () => {
  const { position } = useGeoLocation();

  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    position.latitude,
    position.longitude,
  ]);
  const mapRef = useRef<any>();

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    setTimeout(() => {
      map.flyTo([markerPosition[0], markerPosition[1]], 15, { duration: 3 });
    }, 1000);
  }, [markerPosition]);

  function DraggableMarker() {
    return (
      <Marker
        position={markerPosition}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            console.log(e);
            setMarkerPosition([e.target._latlng.lat, e.target._latlng.lng]);
          },
        }}
      />
    );
  }

  return (
    <div className="h-52 rounded p-1">
      <MapContainer
        ref={mapRef}
        center={markerPosition}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
        <Popup position={markerPosition}>{markerPosition.join(", ")}</Popup>
      </MapContainer>
    </div>
  );
};

export default MyMap;
