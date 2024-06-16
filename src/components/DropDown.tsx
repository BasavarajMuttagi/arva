import { CaretDown, Check } from "@phosphor-icons/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const DropDown = ({
  onChange,
  value,
}: {
  onChange: (data: string) => void;
  value: "Rating" | "Distance";
}) => {
  const [selected, setSelected] = useState<"Rating" | "Distance">(value);
  const [show, setShow] = useState(false);
  useEffect(() => {
    onChange(selected);
    setShow((prev) => !prev);
  }, [selected]);
  return (
    <div className="relative">
      <div
        className="border rounded-lg w-32 px-3 py-[2px] font-semibold text-gray-600 text-[17px] flex items-center justify-between"
        onClick={() => setShow((prev) => !prev)}
      >
        <p>{selected}</p>
        <CaretDown size={16} />
      </div>
      <div className="absolute top-10 left-0 z-10 shadow">
        {show && <Options setSelected={setSelected} selected={selected} />}
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
    <div className="w-32 bg-white rounded-md border font-medium text-gray-500 text-base">
      <ul>
        <li
          value={"Rating"}
          onClick={() => setSelected("Rating")}
          className="px-3 py-1 flex items-center justify-between"
        >
          <span>Rating</span>
          {selected == "Rating" && <Check size={16} />}
        </li>
        <li
          value={"Distance"}
          onClick={() => setSelected("Distance")}
          className="px-3 py-1 flex items-center justify-between"
        >
          <span>Distance</span>
          {selected == "Distance" && <Check size={16} />}
        </li>
      </ul>
    </div>
  );
};
