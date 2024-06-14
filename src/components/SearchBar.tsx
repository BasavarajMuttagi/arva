import { MagnifyingGlass, X } from "@phosphor-icons/react";
import clsx from "clsx";
import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

const SearchBar = (
  props: HTMLAttributes<HTMLInputElement> & {
    onChange: (text: string) => {};
    defaultValue: string;
  }
) => {
  const { className, defaultValue } = props;
  const [searchTerm, setSearchTerm] = useState(defaultValue);

  return (
    <div className="relative text-[#A4ADAE] shrink">
      <input
        {...props}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search"
        className={twMerge(
          clsx(
            "bg-seafoam-100 py-4 px-10 w-full rounded-xl outline-none text-gray-500 text-base",
            className
          )
        )}
      />
      <MagnifyingGlass size={24} className="absolute top-3.5 left-2" />
      <X
        size={24}
        className={twMerge(
          "absolute top-3.5 right-2",
          searchTerm.length > 0 ? "text-gray-600 cursor-pointer" : "text-seafoam-100"
        )}
        onClick={() => setSearchTerm("")}
      />
    </div>
  );
};

export default SearchBar;
