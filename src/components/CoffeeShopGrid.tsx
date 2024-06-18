import { useQuery } from "@tanstack/react-query";
import Mug from "../assets/Mug";
import apiClient from "../axios/apiClient";
import CoffeeShopCard from "./CoffeeShopCard";
import CoffeeShopSK from "./CoffeeShopSK";
import useGeoLocation from "../hooks/useGeoLocation";
import { CoffeeShopData } from "../types";

const CoffeeShopGrid = () => {
  const { position, error } = useGeoLocation();
  const getCoffeeShops = async () => {
    const records = await apiClient.post("/shop/getshops", {
      long: position?.longitude,
      lat: position?.latitude,
      max_distance: 2000,
    });
    return records;
  };

  const {
    data: shops,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featured", position, error],
    queryFn: async () => (await getCoffeeShops()).data as CoffeeShopData[],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 pb-28">
        {isLoading &&
          [...Array(8)].map((_, index) => <CoffeeShopSK key={index} />)}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="font-medium text-center text-sm text-red-300">
        Error fetching coffee shops
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 pb-28">
      {shops?.length == 0 && (
        <div className="col-span-2 flex items-center space-x-2 place-self-center text-sm font-semibold text-[#A4ADAE]">
          No Shops Found
        </div>
      )}
      {shops?.map(({ _id, distance, name, isFavorite }) => (
        <CoffeeShopCard
          key={_id}
          distance={distance}
          name={name}
          rating={4}
          reviewsCount={4}
          shopId={_id}
          isFavorite={isFavorite}
        />
      ))}
      <div className="col-span-2 flex items-center space-x-2 place-self-center text-sm font-semibold text-[#A4ADAE]">
        <p>You Have Reached The End!</p>
        <Mug className="h-10 w-10" />
      </div>
    </div>
  );
};

export default CoffeeShopGrid;
