import {
  BookmarksSimple,
  HeartStraight,
  House,
  User,
} from "@phosphor-icons/react";
const BottomNav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between bg-slate-700">
        <li className="px-7 py-5 text-gray-400 hover:bg-deep-lagoon-blue hover:text-white hover:rounded-[27px]">
          <House size={22} />
        </li>
        <li className="px-7 py-5 text-gray-400 hover:bg-deep-lagoon-blue hover:text-white hover:rounded-[27px]">
          <HeartStraight size={22} />
        </li>
        <li className="px-7 py-5 text-gray-400 hover:bg-deep-lagoon-blue hover:text-white hover:rounded-[27px]">
          <BookmarksSimple size={22} />
        </li>
        <li className="px-7 py-5 text-gray-400 hover:bg-deep-lagoon-blue hover:text-white hover:rounded-[27px]">
          <User size={22} />
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
