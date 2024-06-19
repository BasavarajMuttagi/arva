import { motion } from "framer-motion";
import useCoffeeStore from "../store";
import Mug from "../assets/Mug";
import CartItem from "./CartItem";

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
        <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-[#A4ADAE]">
          <p>You Have Reached The End!</p>
          <Mug className="h-10 w-10" />
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
