import { CaretLeft } from "@phosphor-icons/react";
import ImageSlider from "../components/ImageSlider";
import SwipeUpScreen from "../components/SwipeUpScreen";
import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";
import { useNavigate } from "react-router-dom";

const CafeLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-red-300 relative">
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
    </div>
  );
};

export default CafeLayout;
