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
    try {
      const records = await apiClient.get(`/shop/getshop/${shopId}`);
      return records.data;
    } catch (error) {
      return error;
    }
  };

  const {
    data: shop,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["currentshop", shopId],
    queryFn: async () => (await getCoffeeShopById()) as CoffeeShopWithImages,
  });

  return (
    <motion.div
      className="h-screen bg-red-300 relative"
      initial={{ opacity: 0, y: "-5%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white h-[30%] relative">
        <ImageSlider
          isLoading={isLoading}
          images={shop?.images!}
          isError={isError}
        />
      </div>
      <div className="h-[70%] absolute top-[27%] z-10">
        <ActiveTabContextProvider>
          <SwipeUpScreen shop={shop} isLoading={isLoading} isError={isError} />
        </ActiveTabContextProvider>
      </div>
      <button
        onClick={() => navigate("/")}
        className="p-2 bg-white rounded-md w-fit h-fit absolute inset-2 z-10"
      >
        <CaretLeft size={16} weight="bold" />
      </button>
    </motion.div>
  );
};

export default CafeLayout;
