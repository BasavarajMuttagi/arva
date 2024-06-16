import { SlidersHorizontal } from "@phosphor-icons/react";
import { HTMLAttributes } from "react";

const FilterButton = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="p-4 bg-deep-lagoon-blue text-white rounded-2xl w-fit"
    >
      <SlidersHorizontal size={24} weight="bold" />
    </div>
  );
};

export default FilterButton;
