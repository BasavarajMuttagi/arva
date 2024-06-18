import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import { CoffeeShopData } from "../types";
import CoffeeShopSK from "./CoffeeShopSK";
import CoffeeShopCard from "./CoffeeShopCard";
import Mug from "../assets/Mug";

const Favorite = () => {
  const getCoffeeLikedShops = async () => {
    const records = await apiClient.post("/shop/getallfavoriteshops", {
      long: 75.72271730435826,
      lat: 16.811527275850516
    });
    return records;
  };

  const {
    data: likedShops,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["liked"],
    queryFn: async () => (await getCoffeeLikedShops()).data as CoffeeShopData[],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 p-5 pb-28">
        {isLoading &&
          [...Array(8)].map((_, index) => <CoffeeShopSK key={index} />)}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center text-sm font-medium text-red-300">
        Error fetching coffee shops
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 p-5 pb-28">
      <div className="col-span-2 py-1 text-center text-3xl font-semibold text-deep-lagoon-blue">
        Favorite
      </div>
      {likedShops?.length == 0 && (
        <div className="col-span-2 mt-[50%] flex h-full items-center space-x-2 place-self-center text-sm font-semibold text-[#A4ADAE]">
          No Shops Found
        </div>
      )}
      {likedShops?.map(({ _id, distance, name, isFavorite }) => (
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
      {likedShops?.length !== 0 && (
        <div className="col-span-2 flex items-center space-x-2 place-self-center text-sm font-semibold text-[#A4ADAE]">
          <p>You Have Reached The End!</p>
          <Mug className="h-10 w-10" />
        </div>
      )}
    </div>
  );
};

export default Favorite;
