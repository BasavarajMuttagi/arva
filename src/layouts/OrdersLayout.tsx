import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import { addressType } from "../zod/schema";
import { Orders as OrdersType } from "../types";
import { motion } from "framer-motion";
import AddressCardSK from "../components/AddressCardSK";
import OrderCard from "../components/OrderCard";

export type allAddressResponse = addressType & { _id: string };
const OrdersLayout = () => {
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
      <div>
        <div className="text-lg font-bold text-deep-lagoon-blue">Orders</div>
        <div className="space-y-2 overflow-y-auto">
          {[...Array(8)].map((_, index) => (
            <AddressCardSK key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div className="text-lg font-bold text-deep-lagoon-blue">Orders</div>
        <div className="flex flex-1 items-center justify-center text-center text-sm font-medium text-red-300">
          Error fetching Orders
        </div>
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
      <div className="space-y-2 overflow-y-auto pb-40">
        {orders?.data?.map((order) => <OrderCard key={order._id} {...order} />)}
      </div>
    </motion.div>
  );
};

export default OrdersLayout;
