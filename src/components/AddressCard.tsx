import { useQueryClient } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import { allAddressResponse } from "./AllAddresses";
useQueryClient;
const AddressCard = ({
  title,
  address,
  phone,
  pincode,
  _id,
}: allAddressResponse) => {
  const client = useQueryClient();
  const deleteAddress = async () => {
    await apiClient.get(`/address/delete/${_id}`).then(() => {
      client.refetchQueries({
        queryKey: ["addresses"],
      });
    });
  };
  return (
    <div className="max-h-48 w-full rounded p-2 text-sm font-medium text-slate-500 shadow">
      <div className="flex items-center space-x-2">
        <div className="text-lg font-bold text-deep-lagoon-blue">{title}</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="font-semibold text-slate-700">Address :</div>
        <div>{address}</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="font-semibold text-slate-700">Phone :</div>
        <div>{phone}</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="font-semibold text-slate-700">Pincode :</div>
        <div>{pincode}</div>
      </div>
      <div className="flex items-center justify-between py-2 text-sm font-semibold text-deep-lagoon-blue">
        <button>Edit</button>
        <button className="text-red-500" onClick={() => deleteAddress()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
