import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addressSchema, addressType } from "../zod/schema";
import { useState } from "react";
import { CircleNotch } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import MyMap from "./MyMap";
import apiClient from "../axios/apiClient";
import toast from "react-hot-toast";
const AddressForm = () => {
  const navigate = useNavigate();
  const [isSpin, setIsSpin] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<addressType>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = async (data: addressType) => {
    console.log(data);
    setIsSpin(true);

    await apiClient
      .post("/polygon/check", {
        location: data.location.coordinates,
      })
      .then(async () => {
        await apiClient.post("/address/create", data).then(() => {
          navigate("/user/address");
          reset();
        });
      })
      .catch(() => {
        setIsSpin(false);
        toast.error(
          "It looks like you are out of the serviceable area, please move the marker on the map if location taken was wrong, as of now we only serve in Vijayapura, Karnataka, India",
          {
            duration: 6000,
          },
        );
      })
      .finally(() => {
        setIsSpin(false);
      });
  };

  const getlocation = (location: [number]) => {
    setValue("location.coordinates", location);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-fit space-y-5 p-5 text-sm font-semibold text-deep-lagoon-blue"
      >
        <div className="py-1 text-center text-3xl font-semibold text-deep-lagoon-blue">
          Create Address
        </div>
        <div className="space-y-0.5">
          <div>Title</div>
          <input
            type="text"
            {...register("title")}
            className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
          />
          {errors.title && (
            <p className="text-xs text-red-400">{errors.title.message}</p>
          )}
        </div>
        <div className="space-y-0.5">
          <div>Address</div>
          <input
            type="text"
            {...register("address")}
            className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
          />
          {errors.address && (
            <p className="text-xs text-red-400">{errors.address.message}</p>
          )}
        </div>
        <div className="space-y-0.5">
          <div>Phone</div>
          <input
            type="text"
            {...register("phone")}
            className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-0.5">
          <div>Pincode</div>
          <input
            type="text"
            {...register("pincode")}
            className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
          />
          {errors.pincode && (
            <p className="text-xs text-red-400">{errors.pincode.message}</p>
          )}
        </div>
        <button
          disabled={isSpin}
          type="submit"
          className="flex w-full items-center justify-center space-x-2 rounded-md bg-deep-lagoon-blue p-3 text-lg font-semibold text-white shadow"
        >
          <p>Submit</p>
          {isSpin && <CircleNotch size={18} className="animate-spin" />}
        </button>
      </form>
      <MyMap getLocation={getlocation} />
    </div>
  );
};

export default AddressForm;
