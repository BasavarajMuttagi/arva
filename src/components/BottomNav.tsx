import { User, Bookmark, Heart, Home } from "react-feather";
import { NavLink } from "react-router-dom";
const BottomNav = () => {
  return (
    <nav className="p-3 bg-white">
      <ul className="flex items-center justify-between">
        <li className="px-7 py-5 text-gray-400 rounded-[30px] has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/"}>
            <Home size={24} />
          </NavLink>
        </li>

        <li className="px-7 py-5 text-gray-400 rounded-[30px] has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/favorite"}>
            <Heart size={24} />
          </NavLink>
        </li>
        <li className="px-7 py-5 text-gray-400 rounded-[30px] has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/bookmark"}>
            <Bookmark size={24} />
          </NavLink>
        </li>
        <li className="px-7 py-5 text-gray-400 rounded-[30px] has-[>a.active]:bg-deep-lagoon-blue has-[>a.active]:text-white has-[>a.active]:drop-shadow-md">
          <NavLink to={"/profile"}>
            <User size={24} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
