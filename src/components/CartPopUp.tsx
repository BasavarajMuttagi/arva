import { Link } from "react-router-dom";
import useCoffeeStore from "../store";
import { ArrowRight } from "react-feather";

const CartPopUp = () => {
  const { cart } = useCoffeeStore();
  return (
    <div className="flex items-center justify-between rounded-xl bg-deep-lagoon-blue p-3 text-xl font-semibold text-white shadow-sm">
      <div className="flex items-center space-x-4">
        <p>
          {cart.reduce(
            (accumulator, currentValue) => accumulator + currentValue.count,
            0,
          )}
        </p>{" "}
        <p>Items </p>
      </div>
      <Link to={"/cart"} className="flex items-center space-x-4">
        <p className="underline underline-offset-2">Cart</p>
        <ArrowRight size={24} />
      </Link>
    </div>
  );
};

export default CartPopUp;
