import BottomNav from "../components/BottomNav";
import SearchBar from "../components/SearchBar";
import TitleText from "../components/TitleText";
import FilterButton from "../components/FilterButton";
import ProfilePicture from "../components/ProfilePicture";
import CoffeeShopGrid from "../components/CoffeeShopGrid";
import Filters from "../components/Filters";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="h-full space-y-5 bg-white p-5">
      {/* top */}
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, y: "-15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-end">
          <ProfilePicture />
        </div>
        <TitleText />
        <div className="flex items-center justify-between space-x-2.5">
          <SearchBar defaultValue={""} onChange={() => console.log} />
          <FilterButton onClick={() => setShowFilters((prev) => !prev)} />
        </div>
      </motion.div>
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

      {/* Featured */}
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, y: "-3%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-semibold text-deep-lagoon-blue">
          Featured coffee shops
        </p>
        <CoffeeShopGrid />
      </motion.div>

      {/* bottom */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
