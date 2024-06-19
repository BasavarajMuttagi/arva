import {
  ArrowClockwise,
  CircleNotch,
  MapPin,
  Star,
} from "@phosphor-icons/react";
import Drink from "../assets/Drink";
import Food from "../assets/Food";
import { Coffee } from "react-feather";
import { useActiveTab } from "../contexts/ActiveTabContextProvider";
import { twMerge } from "tailwind-merge";
import IconButton from "./IconButton";
import { CoffeeShopWithImages } from "../types";
import FoodItems from "./FoodItems";
import { createPortal } from "react-dom";
import ShowShopLocation from "./ShowShopLocation";
import { useState } from "react";
import CartPopUp from "./CartPopUp";
import useCoffeeStore from "../store";
import { AnimatePresence, motion } from "framer-motion";

const SwipeUpScreen = ({
  isLoading,
  isError,
  shop,
}: {
  shop: CoffeeShopWithImages | undefined;
  isLoading: boolean;
  isError: boolean;
}) => {
  const { cart } = useCoffeeStore();
  const [activeTab, setActiveTab] = useActiveTab();
  const [showMap, setShowMap] = useState(false);
  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center space-y-10 rounded-t-3xl bg-white p-5">
        <CircleNotch size={40} className="animate-spin text-orange-500" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex h-screen w-screen items-center justify-center space-y-10 rounded-t-3xl bg-white p-5">
        <button onClick={() => location.reload()}>
          <ArrowClockwise size={40} className="text-blue-400" weight="bold" />
        </button>
      </div>
    );
  }
  return (
    <div className="relative h-screen w-full space-y-10 rounded-t-3xl bg-white p-5">
      <div className="space-y-2 pt-10 text-deep-lagoon-blue">
        <p className="text-xl font-semibold">{shop?.name}</p>
        <div className="space-y-1">
          <div className="flex items-end space-x-1">
            <Star size={16} weight="fill" className="text-gold" />
            <div className="flex items-end space-x-2 text-sm font-semibold">
              <p>{4.5}</p>
              <p className="text-disabled">{`${429} reviews`}</p>
            </div>
          </div>
          <p className="text-sm font-semibold">{shop?.address}</p>
          <div className="relative">
            {showMap &&
              createPortal(
                <ShowShopLocation
                  position={shop?.location.coordinates}
                  close={setShowMap}
                />,
                document.body,
              )}
          </div>
          <MapPin
            size={32}
            weight="bold"
            onClick={() => setShowMap((p) => !p)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <IconButton
          onClick={() => setActiveTab("COFFEE")}
          title="Coffee"
          children={
            <Coffee
              className={twMerge(
                "h-[24px] w-[24px]",
                activeTab === "COFFEE" ? "active" : "",
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
                activeTab === "DRINKS" ? "active" : "",
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
                activeTab === "FOOD" ? "active" : "",
              )}
            />
          }
        />
      </div>
      <div className="space-y-8 pb-10">
        <FoodItems products={shop?.products} shop={shop} />
      </div>
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            className="sticky bottom-3"
            initial={{ opacity: 0, y: "110%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: "110%" }}
          >
            <CartPopUp />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwipeUpScreen;
