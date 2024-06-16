import { CaretLeft } from "@phosphor-icons/react";
import ImageSlider from "../components/ImageSlider";
import SwipeUpScreen from "../components/SwipeUpScreen";
import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CafeLayout = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen bg-red-300 relative"
      initial={{ opacity: 0, y: "-5%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white h-[30%] relative">
        <ImageSlider />
      </div>
      <div className="h-[70%] absolute top-[27%] z-10">
        <ActiveTabContextProvider>
          <SwipeUpScreen />
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
