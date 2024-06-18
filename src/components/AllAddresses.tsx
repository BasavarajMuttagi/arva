import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import AddressCard from "./AddressCard";
import { addressType } from "../zod/schema";
import AddressCardSK from "./AddressCardSK";
import { useNavigate } from "react-router-dom";

export type allAddressResponse = addressType & { _id: string };
const AllAddresses = () => {
  const navigate = useNavigate();
  const getCoffeeShops = async () => {
    const records = await apiClient.get("/address/getall");
    return records;
  };

  const {
    data: addresses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: async () => (await getCoffeeShops()).data as allAddressResponse[],
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
  return (
    <div className="space-y-5 py-2">
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
      <div className="space-y-2">
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
    </div>
  );
};

export default AllAddresses;