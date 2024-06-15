import BottomNav from "../components/BottomNav";
import SearchBar from "../components/SearchBar";
import TitleText from "../components/TitleText";
import Filters from "../components/Filters";
import Profile from "../components/Profile";
import CoffeeShopGrid from "../components/CoffeeShopGrid";

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
        <CoffeeShopGrid />
      </div>

      {/* bottom */}
      <div className="fixed bottom-0 right-0 left-0">
        <BottomNav />
      </div>
    </div>
  );
};

export default HomeLayout;
