import { Link } from "react-router-dom";
import useCoffeeStore from "../store";
import { MapPinLine, Scroll, UserCircle } from "@phosphor-icons/react";

const UserNav = () => {
  const { logout, displayName } = useCoffeeStore();
  return (
    <div className="flex h-[80%] flex-col justify-between py-2">
      <div className="py-1 text-center text-3xl font-semibold text-deep-lagoon-blue">
        Hi, {displayName}
      </div>
      <ul className="space-y-2">
        <li className="rounded-md p-3 hover:bg-seafoam-100">
          <Link to={"/user/profile"} className="flex items-center space-x-3">
            <UserCircle size={32} weight="duotone" className="text-green-300" />
            <p className="text-xl font-semibold tracking-wide text-deep-lagoon-blue">
              Profile
            </p>
          </Link>
        </li>
        <li className="rounded-md p-3 hover:bg-seafoam-100">
          <Link to={"/user/address"} className="flex items-center space-x-3">
            <MapPinLine size={32} weight="duotone" className="text-red-300" />
            <p className="text-xl font-semibold tracking-wide text-deep-lagoon-blue">
              Address
            </p>
          </Link>
        </li>
        <li className="rounded-md p-3 hover:bg-seafoam-100">
          <Link to={"/user/orders"} className="flex items-center space-x-3">
            <Scroll size={32} weight="duotone" className="text-blue-300" />
            <p className="text-xl font-semibold tracking-wide text-deep-lagoon-blue">
              Orders
            </p>
          </Link>
        </li>
      </ul>
      <button
        className="rounded-md bg-deep-lagoon-blue p-3 text-lg font-semibold text-white"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};

export default UserNav;
