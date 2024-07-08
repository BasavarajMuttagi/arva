import { SlidersHorizontal } from "@phosphor-icons/react";
import { HTMLAttributes } from "react";

const FilterButton = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="w-fit rounded-2xl bg-deep-lagoon-blue p-4 text-white"
    >
      <SlidersHorizontal size={24} weight="bold" />
    </div>
  );
};

export default FilterButton;
