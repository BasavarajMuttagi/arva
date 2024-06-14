import BottomNav from "../components/BottomNav";
import SearchBar from "../components/SearchBar";
import TitleText from "../components/TitleText";
import Filters from "../components/Filters";
import Profile from "../components/Profile";
import CoffeeShopCard from "../components/CoffeeShopCard";
import Mug from "../assets/Mug";

const HomeLayout = () => {
  return (
    <div className="h-screen bg-white p-5 space-y-5">
      {/* top */}
      <div className="space-y-5">
        <div className="flex items-center justify-end">
          <Profile />
        </div>
        <TitleText />
        <div className="flex items-center justify-between space-x-2.5">
          <SearchBar defaultValue={""} onChange={() => console.log} />
          <Filters />
        </div>
      </div>

      {/* Featured */}
      <div className="space-y-5">
        <p className="font-semibold text-deep-lagoon-blue">
          Featured coffee shops
        </p>

        <div className="grid grid-cols-2 gap-4 pb-28">
          <CoffeeShopCard />
          <CoffeeShopCard />
          <CoffeeShopCard />
          <CoffeeShopCard />
          <CoffeeShopCard />
          <CoffeeShopCard />
          <CoffeeShopCard />
          <div className="text-[#A4ADAE] place-self-center col-span-2 text-sm flex items-center space-x-2 font-semibold">
            <p>You Have Reached The End!</p>
            <Mug className="h-10 w-10" />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="fixed bottom-0 right-0 left-0">
        <BottomNav />
      </div>
    </div>
  );
};

export default HomeLayout;
