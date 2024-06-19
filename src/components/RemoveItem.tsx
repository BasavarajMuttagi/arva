import { HTMLAttributes } from "react";
import { CheckCircle } from "@phosphor-icons/react";

const RemoveItem = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="relative">
      <div className="h-10 w-10 rounded-full border-[3px] border-white bg-deep-lagoon-blue"></div>
      <CheckCircle
        size={24}
        className="absolute left-2 top-2 text-white"
        weight="bold"
      />
    </div>
  );
};

export default RemoveItem;
