import { useEffect, useState } from "react";
const defaultLocation = {
  latitude: 16.846751551210442,
  longitude: 75.7099050476195,
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
