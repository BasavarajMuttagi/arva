import { motion } from "framer-motion";
import useCoffeeStore from "../store";
import Mug from "../assets/Mug";
import CartItem from "./CartItem";
import { ArrowRight } from "@phosphor-icons/react";

const Cart = () => {
  const { cart } = useCoffeeStore();
  return (
    <motion.div
      className="space-y-5 p-5 pb-28"
      initial={{ opacity: 0, y: "-15%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-1 text-center text-3xl font-semibold text-deep-lagoon-blue">
        Cart
      </div>
      {cart?.length == 0 && (
        <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-[#A4ADAE]">
          Cart Empty
        </div>
      )}
      {cart?.map(({ description, itemId, name, price, count }) => (
        <CartItem
          description={description}
          itemId={itemId}
          name={name}
          price={price}
          count={count}
        />
      ))}
      {cart?.length !== 0 && (
        <>
          {" "}
          <div>
            <div className="border-2 border-b"></div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">Total</div>
              <div className="text-xl font-semibold">
                ₹
                {cart.reduce(
                  (prev, current) => prev + current.count * current.price,
                  0,
                )}
              </div>
            </div>
          </div>
          <button className="flex w-full items-center justify-center space-x-4 rounded-lg bg-deep-lagoon-blue p-3 text-xl font-semibold text-white">
            <div>Pay Now</div>
            <ArrowRight size={24} />
          </button>
        </>
      )}
      {cart?.length !== 0 && (
        <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-[#A4ADAE]">
          <p>You Have Reached The End!</p>
          <Mug className="h-10 w-10" />
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
