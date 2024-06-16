import { useEffect, useState } from "react";
const defaultLocation = {
  latitude: 16.808298621729165,
  longitude: 75.72723437190068,
};

const useGeoLocation = () => {
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  }>(defaultLocation);
  const [error, setError] = useState(false);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError(true);
      setPosition(defaultLocation);
      return;
    }

    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ latitude, longitude });
    };

    const handleError = () => {
      setError(true);
      setPosition(defaultLocation);
    };

    const watcher = geo.watchPosition(handleSuccess, handleError);
    return () => geo.clearWatch(watcher);
  }, []);

  return { position, error };
};

export default useGeoLocation;
