import { useQuery } from "@tanstack/react-query";
import Mug from "../assets/Mug";
import apiClient from "../axios/apiClient";
import CoffeeShopCard from "./CoffeeShopCard";
import { useState } from "react";
import CoffeeShopSK from "./CoffeeShopSK";

const CoffeeShopGrid = () => {
  const [shops, setShops] = useState([]);
  const getCoffeeShops = async () => {
    try {
      const records = await apiClient.post("/shop/getshops", {
        long: 75.72294088372159,
        lat: 16.81147575629741,
        max_distance: 5000,
      });
      setShops(records.data);
      return records.data;
    } catch (error) {
      return error;
    }
  };

  const { isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => await getCoffeeShops(),
  });
  return (
    <div className="grid grid-cols-2 gap-4 pb-28">
      {!isLoading &&
        shops.map(
          (
            eachShop: { name: string; rating: number; distance: number },
            index
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
      {isLoading &&
        [...Array(8)].map((_, index) => <CoffeeShopSK key={index} />)}
      <div className="text-[#A4ADAE] place-self-center col-span-2 text-sm flex items-center space-x-2 font-semibold">
        <p>You Have Reached The End!</p>
        <Mug className="h-10 w-10" />
      </div>
    </div>
  );
};

export default CoffeeShopGrid;
