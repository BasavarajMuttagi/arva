import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import useGeoLocation from "../hooks/useGeoLocation";
import "./../map.css";
export default function MyMap({
  getLocation,
}: {
  getLocation: (data: any) => void;
}) {
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
    getLocation([currentPosition[0], currentPosition[1]]);
    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [currentPosition[0], currentPosition[1]],
      zoom: zoom,
    });

    map.current.on("load", async function () {
      const geojson = await maptilersdk.data.get(
        `a8891c4f-3ca7-4374-8f5c-fc8776691621`,
      );
      map.current.addSource("rio_cats", {
        type: "geojson",
        data: geojson,
      });

      map.current.addLayer({
        id: "rio_cats",
        type: "fill",
        source: "rio_cats",
        layout: {},
        paint: {
          "fill-color": "#98b",
          "fill-opacity": 0.8,
        },
      });
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
      await maptilersdk.geocoding.reverse([
        currentPosition[0],
        currentPosition[1],
      ]);
    }
    const handleDragEnd = () => {
      const { lng, lat } = marker.getLngLat();
      setCurrentPosition([lng, lat]);
      getLocation([lng, lat]);
      getLocationData();
    };

    marker.on("dragend", handleDragEnd);

    return () => {
      marker.off("dragend", handleDragEnd);
    };
  }, [marker]);

  return (
    <div className="map-wrap z-0">
      <div ref={mapContainer} className="map h-52" />
    </div>
  );
}
