import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import useGeoLocation from "../hooks/useGeoLocation";

export default function MyMap() {
  const { position } = useGeoLocation();
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    position.longitude,
    position.latitude,
  ]);
  const [marker, setMarker] = useState<maptilersdk.Marker>();
  const mapContainer = useRef(null);
  const map = useRef<any>(null);
  const [zoom] = useState(15);
  maptilersdk.config.apiKey = import.meta.env.VITE_MAP_API_KEY;

  // create map 
  useEffect(() => {
    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [currentPosition[0], currentPosition[1]],
      zoom: zoom,
    });
  }, [currentPosition[0], currentPosition[1], zoom]);

  //create marker
  useEffect(() => {
    const newMarker = new maptilersdk.Marker()
      .setLngLat([currentPosition[0], currentPosition[1]])
      .addTo(map.current);

    newMarker.setDraggable(true);
    setMarker(newMarker);
    return () => {
      newMarker.remove();
    };
  }, [map.current, currentPosition[0], currentPosition[1]]);

  //update marker position and get location data
  useEffect(() => {
    if (!marker) return;
    async function getLocationData() {
      const results = await maptilersdk.geocoding.reverse([
        currentPosition[0],
        currentPosition[1],
      ]);
      console.log(results.attribution);
    }
    const handleDragEnd = () => {
      const { lng, lat } = marker.getLngLat();
      console.log({ lng, lat });
      setCurrentPosition([lng, lat]);
      getLocationData();
    };

    marker.on("dragend", handleDragEnd);

    return () => {
      marker.off("dragend", handleDragEnd);
    };
  }, [marker]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map h-52" />
    </div>
  );
}
