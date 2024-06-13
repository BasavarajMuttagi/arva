import {
  BookmarksSimple,
  HeartStraight,
  House,
  User,
} from "@phosphor-icons/react";
const BottomNav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between">
        <li className="px-7 py-4  hover:bg-deep-lagoon-blue hover:text-white hover:rounded-full">
          <House size={22} />
        </li>
        <li className="px-7 py-4  hover:bg-deep-lagoon-blue hover:text-white hover:rounded-full">
          <HeartStraight size={22} />
        </li>
        <li className="px-7 py-4  hover:bg-deep-lagoon-blue hover:text-white hover:rounded-full">
          <BookmarksSimple size={22} />
        </li>
        <li className="px-7 py-4  hover:bg-deep-lagoon-blue hover:text-white hover:rounded-full">
          <User size={22} />
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
