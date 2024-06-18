import { allAddressResponse } from "./AllAddresses";

const AddressCard = ({
  title,
  address,
  phone,
  pincode,
}: allAddressResponse) => {
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
        <button className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default AddressCard;
