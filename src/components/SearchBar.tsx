import { MagnifyingGlass, X } from "@phosphor-icons/react";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SearchContext } from "./Home";

const SearchBar = () => {
  const [value, setValue] = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    setValue(searchTerm);
  }, [searchTerm]);
  return (
    <div className="relative shrink text-[#A4ADAE]">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search"
        className={twMerge(
          clsx(
            "w-full rounded-xl bg-seafoam-100 px-10 py-4 text-base text-gray-500 outline-none",
          ),
        )}
      />
      <MagnifyingGlass size={24} className="absolute left-2 top-3.5" />
      <X
        size={24}
        className={twMerge(
          "absolute right-2 top-3.5",
          searchTerm.length > 0
            ? "cursor-pointer text-gray-600"
            : "text-seafoam-100",
        )}
        onClick={() => setSearchTerm("")}
      />
    </div>
  );
};

export default SearchBar;
