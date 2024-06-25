import { CaretDown, Check } from "@phosphor-icons/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSort } from "../contexts/SortContextProvider";

const DropDown = () => {
  const [sort, setSort] = useSort();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
  }, [sort]);
  return (
    <div className="relative">
      <div
        className="flex w-32 items-center justify-between rounded-lg border px-3 py-[2px] text-[17px] font-semibold text-gray-600"
        onClick={() => setShow((prev) => !prev)}
      >
        <p>{sort}</p>
        <CaretDown size={16} />
      </div>
      <div className="absolute left-0 top-10 z-50 shadow">
        {show && <Options setSelected={setSort} selected={sort} />}
      </div>
    </div>
  );
};

export default DropDown;

const Options = ({
  setSelected,
  selected,
}: {
  setSelected: Dispatch<SetStateAction<"Rating" | "Distance">>;
  selected: "Rating" | "Distance";
}) => {
  return (
    <div className="w-32 rounded-md border bg-white text-base font-medium text-gray-500">
      <ul>
        <li
          value={"Rating"}
          onClick={() => setSelected("Rating")}
          className="flex items-center justify-between px-3 py-1"
        >
          <span>Rating</span>
          {selected == "Rating" && <Check size={16} />}
        </li>
        <li
          value={"Distance"}
          onClick={() => setSelected("Distance")}
          className="flex items-center justify-between px-3 py-1"
        >
          <span>Distance</span>
          {selected == "Distance" && <Check size={16} />}
        </li>
      </ul>
    </div>
  );
};
