import { CaretLeft } from "@phosphor-icons/react";
import ImageSlider from "../components/ImageSlider";
import SwipeUpScreen from "../components/SwipeUpScreen";
import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import { CoffeeShopWithImages } from "../types";

const CafeLayout = () => {
  let { shopId } = useParams();
  const navigate = useNavigate();
  const getCoffeeShopById = async () => {
    const records = await apiClient.get(`/shop/getshop/${shopId}`);
    return records;
  };

  const {
    data: shop,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["currentshop", shopId],
    queryFn: async () =>
      (await getCoffeeShopById()).data as CoffeeShopWithImages,
  });

  return (
    <motion.div
      className="relative h-screen bg-red-300"
      initial={{ opacity: 0, y: "-5%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-[30%] bg-white">
        <ImageSlider
          isLoading={isLoading}
          images={shop?.images!}
          isError={isError}
        />
      </div>
      <div className="absolute left-0 right-0 top-[27%] z-10 h-[70%]">
        <ActiveTabContextProvider>
          <SwipeUpScreen shop={shop} isLoading={isLoading} isError={isError} />
        </ActiveTabContextProvider>
      </div>
      <button
        onClick={() => navigate("/")}
        className="absolute inset-2 z-10 h-fit w-fit rounded-md bg-white p-2"
      >
        <CaretLeft size={16} weight="bold" />
      </button>
    </motion.div>
  );
};

export default CafeLayout;
