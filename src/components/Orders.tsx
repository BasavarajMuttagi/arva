import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import { addressType } from "../zod/schema";
import AddressCardSK from "./AddressCardSK";
import { Orders as OrdersType } from "../types";
import OrderCard from "./OrderCard";
import { motion } from "framer-motion";

export type allAddressResponse = addressType & { _id: string };
const Orders = () => {
  const getAllOrders = async () => {
    const records = await apiClient.get("/stripe/orders");
    return records;
  };

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => (await getAllOrders()).data as OrdersType,
  });

  if (isLoading) {
    return (
      <div className="space-y-2 overflow-y-auto">
        {[...Array(8)].map((_, index) => (
          <AddressCardSK key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-sm font-medium text-red-300">
        Error fetching Orders
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: "-15%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
      className="space-y-5 py-2"
    >
      <div className="text-lg font-bold text-deep-lagoon-blue">Orders</div>
      <div className="space-y-2">
        {orders?.data?.map((order) => <OrderCard key={order._id} {...order} />)}
      </div>
    </motion.div>
  );
};

export default Orders;
