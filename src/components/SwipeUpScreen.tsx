import { ArrowClockwise, CircleNotch, Star } from "@phosphor-icons/react";
import Drink from "../assets/Drink";
import Food from "../assets/Food";
import { Coffee } from "react-feather";
import { useActiveTab } from "../contexts/ActiveTabContextProvider";
import { twMerge } from "tailwind-merge";
import IconButton from "./IconButton";
import { CoffeeShopWithImages } from "../types";
import FoodItems from "./FoodItems";

const SwipeUpScreen = ({
  isLoading,
  isError,
  shop,
}: {
  shop: CoffeeShopWithImages | undefined;
  isLoading: boolean;
  isError: boolean;
}) => {
  const [activeTab, setActiveTab] = useActiveTab();

  if (isLoading) {
    return (
      <div className="h-screen rounded-t-3xl bg-white p-5  space-y-10 flex justify-center items-center w-screen">
        <CircleNotch size={40} className="text-orange-500 animate-spin" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-screen rounded-t-3xl bg-white p-5  space-y-10 flex justify-center items-center w-screen">
        <button onClick={() => location.reload()}>
          <ArrowClockwise size={40} className="text-blue-400" weight="bold" />
        </button>
      </div>
    );
  }
  return (
    <div className="h-screen rounded-t-3xl bg-white p-5  space-y-10 w-full">
      <div className="text-deep-lagoon-blue pt-10 space-y-2">
        <p className="font-semibold text-xl">{shop?.name}</p>
        <div className="space-y-1">
          <div className="flex items-end space-x-1">
            <Star size={16} weight="fill" className="text-gold" />
            <div className="flex items-end space-x-2 font-semibold text-sm">
              <p>{4.5}</p>
              <p className="text-disabled">{`${429} reviews`}</p>
            </div>
          </div>
          <p className="text-sm font-semibold">{shop?.address}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <IconButton
          onClick={() => setActiveTab("COFFEE")}
          title="Coffee"
          children={
            <Coffee
              className={twMerge(
                "h-[24px] w-[24px]",
                activeTab === "COFFEE" ? "active" : ""
              )}
            />
          }
        />
        <IconButton
          onClick={() => setActiveTab("DRINKS")}
          title="Drinks"
          children={
            <Drink
              className={twMerge(
                "h-[24px] w-[24px]",
                activeTab === "DRINKS" ? "active" : ""
              )}
            />
          }
        />
        <IconButton
          onClick={() => setActiveTab("FOOD")}
          title="Food"
          children={
            <Food
              className={twMerge(
                "h-[24px] w-[24px]",
                activeTab === "FOOD" ? "active" : ""
              )}
            />
          }
        />
      </div>
      <div className="space-y-8 pb-10">
        <FoodItems products={shop?.products} />
      </div>
    </div>
  );
};

export default SwipeUpScreen;
