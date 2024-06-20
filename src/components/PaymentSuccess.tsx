import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCoffeeStore from "../store";

const PaymentSuccess = () => {
  const { reset } = useCoffeeStore();
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    reset();
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/user/orders");
      clearInterval(interval);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-5%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
      className="flex h-screen items-center justify-center bg-green-400"
    >
      <div className="flex items-center space-x-2 text-xl font-bold text-white">
        <div>Payment Success</div>
        <div className="text-lg text-blue-500">{count}</div>
      </div>
    </motion.div>
  );
};

export default PaymentSuccess;
