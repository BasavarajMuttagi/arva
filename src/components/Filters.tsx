import { Switch } from "@headlessui/react";
import { useState } from "react";
import DropDown from "./DropDown";
const Filters = () => {
  const [veg, setVeg] = useState(true);
  const [nonVeg, setNonVeg] = useState(true);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={nonVeg}
        onChange={setNonVeg}
        className="border group relative flex h-7 w-14 cursor-pointer rounded-full bg-seafoam-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-red-600 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
      <Switch
        checked={veg}
        onChange={setVeg}
        className="border group relative flex h-7 w-14 cursor-pointer rounded-full bg-seafoam-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-green-600 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
        />
      </Switch>
      <DropDown onChange={() => console.log} value="Distance" />
    </div>
  );
};

export default Filters;
