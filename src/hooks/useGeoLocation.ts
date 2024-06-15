import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    const handleSuccess = (pos: any) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ latitude, longitude });
    };

    const handleError = (err: any) => {
      setError(err.message);
    };

    geo.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { position, error };
};

export default useGeoLocation;
