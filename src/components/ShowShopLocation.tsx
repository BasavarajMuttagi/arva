import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import { XCircle } from "@phosphor-icons/react";

export default function ShowShopLocation({
  position,
  close,
}: {
  position: [number, number] | undefined | any;
  close: (data: boolean) => void;
}) {
  const [currentPosition] = useState<[number, number]>(position);
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

    return () => {
      newMarker.remove();
    };
  }, [map.current, currentPosition[0], currentPosition[1]]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="absolute top-0 h-[80vh] w-full scale-90 rounded-md"
      />
      <XCircle
        size={32}
        className="absolute right-1 top-0 text-red-500"
        weight="fill"
        onClick={() => close(false)}
      />
    </div>
  );
}
