import { HTMLAttributes } from "react";
import { Plus } from "@phosphor-icons/react";

const AddItem = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="relative">
      <div className="bg-deep-lagoon-blue w-10 h-10 rounded-full border-[3px] border-white"></div>
      <Plus
        size={24}
        className="absolute top-2 left-2 text-white"
        weight="bold"
      />
    </div>
  );
};

export default AddItem;
