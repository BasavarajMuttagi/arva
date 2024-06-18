import { Link } from "react-router-dom";
import useCoffeeStore from "../store";

const UserNav = () => {
  const { logout } = useCoffeeStore();
  return (
    <div className="flex h-full w-full flex-col justify-between py-2">
      <ul className="space-y-2">
        <li className="rounded-md p-2 hover:bg-seafoam-100">
          <Link to={"/user/profile"}>
            <p className="text-sm font-semibold tracking-wide text-deep-lagoon-blue">
              Profile
            </p>
          </Link>
        </li>
        <li className="rounded-md p-2 hover:bg-seafoam-100">
          <Link to={"/user/address"}>
            <p className="text-sm font-semibold tracking-wide text-deep-lagoon-blue">
              Address
            </p>
          </Link>
        </li>
        <li className="rounded-md p-2 hover:bg-seafoam-100">
          <Link to={"/user/orders"}>
            <p className="text-sm font-semibold tracking-wide text-deep-lagoon-blue">
              Orders
            </p>
          </Link>
        </li>
      </ul>
      <button
        className="rounded-md bg-deep-lagoon-blue p-1 text-lg font-semibold text-white"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};

export default UserNav;
