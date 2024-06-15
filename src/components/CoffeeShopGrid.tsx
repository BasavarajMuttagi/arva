import { useQuery } from "@tanstack/react-query";
import Mug from "../assets/Mug";
import apiClient from "../axios/apiClient";
import CoffeeShopCard from "./CoffeeShopCard";
import CoffeeShopSK from "./CoffeeShopSK";
import useGeoLocation from "../hooks/useGeoLocation";

const CoffeeShopGrid = () => {
  const { position } = useGeoLocation();
  console.log(position?.latitude, position?.longitude);
  const getCoffeeShops = async () => {
    try {
      const records = await apiClient.post("/shop/getshops", {
        long: position?.longitude || 75.7099050476195,
        lat: position?.latitude || 16.846751551210442,
        max_distance: 2000,
      });
      return records.data;
    } catch (error) {
      return error;
    }
  };

  const {
    data: shops,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featured", position],
    queryFn: async () => await getCoffeeShops(),
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
      <div className="text-sm text-red-300 text-center fontm">
        Error fetching coffee shops
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 pb-28">
      {shops.map(
        (
          eachShop: { name: string; rating: number; distance: number },
          index: number
        ) => (
          <CoffeeShopCard
            key={index}
            distance={eachShop.distance}
            name={eachShop.name}
            rating={eachShop.rating}
            reviewsCount={4}
          />
        )
      )}
      <div className="text-[#A4ADAE] place-self-center col-span-2 text-sm flex items-center space-x-2 font-semibold">
        <p>You Have Reached The End!</p>
        <Mug className="h-10 w-10" />
      </div>
    </div>
  );
};

export default CoffeeShopGrid;
