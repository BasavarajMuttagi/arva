import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import AddressCard from "./AddressCard";
import { addressType } from "../zod/schema";
import AddressCardSK from "./AddressCardSK";
import { useNavigate } from "react-router-dom";
import useCoffeeStore from "../store";
import { motion } from "framer-motion";

export type allAddressResponse = addressType & { _id: string };
const AllAddresses = () => {
  const { selectedAddress, setSelectedAddress } = useCoffeeStore();

  const navigate = useNavigate();
  const getAllAddresses = async () => {
    const records = await apiClient.get("/address/getall");
    return records;
  };

  const {
    data: addresses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: async () => (await getAllAddresses()).data as allAddressResponse[],
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
        Error fetching coffee shops
      </div>
    );
  }

  if (!selectedAddress._id && addresses?.length) {
    setSelectedAddress(addresses[0]);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: "-15%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
      className="space-y-5 py-2"
    >
      <div className="flex items-baseline justify-between">
        <div className="text-lg font-bold text-deep-lagoon-blue">
          Saved addresses
        </div>
        <button
          onClick={() => navigate("/user/address/create")}
          className="rounded-md border-2 border-deep-lagoon-blue bg-white px-2 py-1 text-sm font-semibold text-deep-lagoon-blue"
        >
          Add
        </button>
      </div>
      <div className="space-y-2 overflow-y-auto pb-40">
        {addresses?.map(
          ({ title, address, phone, pincode, location, _id }, index) => (
            <AddressCard
              key={index}
              title={title}
              address={address}
              phone={phone}
              pincode={pincode}
              location={location}
              _id={_id}
            />
          ),
        )}
      </div>
    </motion.div>
  );
};

export default AllAddresses;
