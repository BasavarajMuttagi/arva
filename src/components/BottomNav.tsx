import { ShoppingBagOpen } from "@phosphor-icons/react";
import { User, Heart, Home } from "react-feather";
import { NavLink } from "react-router-dom";
const BottomNav = () => {
  return (
    <nav className="bg-white p-3">
      <ul className="flex items-center justify-between">
        <li className="rounded-[30px] px-7 py-5 text-gray-400 has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/"}>
            <Home size={24} />
          </NavLink>
        </li>

        <li className="rounded-[30px] px-7 py-5 text-gray-400 has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/favorite"}>
            <Heart size={24} />
          </NavLink>
        </li>
        <li className="rounded-[30px] px-7 py-5 text-gray-400 has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/bookmark"}>
            <ShoppingBagOpen size={26} />
          </NavLink>
        </li>
        <li className="rounded-[30px] px-7 py-5 text-gray-400 has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/user"}>
            <User size={24} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
