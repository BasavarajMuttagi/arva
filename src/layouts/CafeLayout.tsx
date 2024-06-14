import SwipeUpScreen from "../components/SwipeUpScreen";
import ActiveTabContextProvider from "../contexts/ActiveTabContextProvider";

const CafeLayout = () => {
  return (
    <div className="h-screen bg-red-300">
      <ActiveTabContextProvider>
        <SwipeUpScreen />
      </ActiveTabContextProvider>
    </div>
  );
};

export default CafeLayout;






