import ImageSlider from "../components/ImageSlider";
import SwipeUpScreen from "../components/SwipeUpScreen";
import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";

const CafeLayout = () => {
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
    </div>
  );
};

export default CafeLayout;
