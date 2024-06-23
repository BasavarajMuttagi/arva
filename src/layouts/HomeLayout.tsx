import SearchBar from "../components/SearchBar";
import TitleText from "../components/TitleText";
import FilterButton from "../components/FilterButton";
import ProfilePicture from "../components/ProfilePicture";
import CoffeeShopGrid from "../components/CoffeeShopGrid";
import Filters from "../components/Filters";
import { motion } from "framer-motion";
import { createContext, SetStateAction, useState, Dispatch } from "react";
export const SearchContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);
const HomeLayout = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
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
            <SearchBar />
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
      </div>
    </SearchContext.Provider>
  );
};

export default HomeLayout;
