import { useQuery } from "@tanstack/react-query";
import Mug from "../assets/Mug";
import apiClient from "../axios/apiClient";
import CoffeeShopCard from "./CoffeeShopCard";
import CoffeeShopSK from "./CoffeeShopSK";
import useGeoLocation from "../hooks/useGeoLocation";
import { CoffeeShopData } from "../types";
import { useState } from "react";
import { useSearch } from "../contexts/SearchContextProvider";
import { activeSortType, useSort } from "../contexts/SortContextProvider";

const CoffeeShopGrid = () => {
  const [value] = useSearch();
  const [sort] = useSort();
  const { position, error } = useGeoLocation();
  const [filteredCoffeeShops, setFilteredCoffeeShops] = useState<
    CoffeeShopData[]
  >([]);

  function sortCoffeeShops(
    coffeeShops: CoffeeShopData[],
    preference: activeSortType,
  ) {
    if (preference === "Distance") {
      // Sort by distance in ascending order
      return coffeeShops.sort((a, b) => a.distance - b.distance);
    } else if (preference === "Rating") {
      // Sort by rating in descending order
      return coffeeShops.sort((a, b) => b.rating - a.rating);
    } else {
      // Default: return unsorted array
      return coffeeShops;
    }
  }
  const getCoffeeShops = async () => {
    const records = await apiClient
      .post("/shop/getshops", {
        long: position?.longitude,
        lat: position?.latitude,
      })
      .then((res) => {
        setFilteredCoffeeShops(res.data);
        return res;
      });
    return records;
  };

  const { isLoading, isError } = useQuery({
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
      <div className="text-center text-sm font-medium text-red-300">
        Error fetching coffee shops
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 pb-28">
      {filteredCoffeeShops?.length == 0 && (
        <div className="col-span-2 flex items-center space-x-2 place-self-center text-sm font-semibold text-[#A4ADAE]">
          No Shops Found
        </div>
      )}
      {sortCoffeeShops(filteredCoffeeShops, sort)
        .filter((eachObject) =>
          eachObject.name.toLowerCase().includes(value.toLowerCase()),
        )
        .map(({ _id, distance, name, isFavorite, images, reviews, rating }) => (
          <CoffeeShopCard
            key={_id}
            distance={distance}
            name={name}
            rating={rating}
            reviews={reviews}
            shopId={_id}
            isFavorite={isFavorite}
            images={images}
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
