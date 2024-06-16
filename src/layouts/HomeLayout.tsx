import BottomNav from "../components/BottomNav";
import SearchBar from "../components/SearchBar";
import TitleText from "../components/TitleText";
import FilterButton from "../components/FilterButton";
import Profile from "../components/Profile";
import CoffeeShopGrid from "../components/CoffeeShopGrid";
import Filters from "../components/Filters";
import { motion } from "framer-motion";
import { useState } from "react";
const HomeLayout = () => {
  const [showFilters, setShowFilters] = useState(false);
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
          <FilterButton onClick={() => setShowFilters((prev) => !prev)} />
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: showFilters ? 1 : 0,
            height: showFilters ? "auto" : "0px",
          }}
          transition={{ duration: 0.3 }}
        >
          <Filters />
        </motion.div>
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
