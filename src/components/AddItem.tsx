import { HTMLAttributes } from "react";
import { Plus } from "@phosphor-icons/react";

const AddItem = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="relative">
      <div className="h-10 w-10 rounded-full border-[3px] border-white bg-deep-lagoon-blue"></div>
      <Plus
        size={24}
        className="absolute left-2 top-2 text-white"
        weight="bold"
      />
    </div>
  );
};

export default AddItem;
