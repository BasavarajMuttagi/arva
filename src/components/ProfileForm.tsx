import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userType } from "../zod/schema";
import { UserProfileResponse } from "../types";
import apiClient from "../axios/apiClient";
import { useState } from "react";
import { CircleNotch } from "@phosphor-icons/react";

const ProfileForm = ({
  defaultValues,
}: {
  defaultValues: UserProfileResponse;
}) => {
  const [isSpin, setIsSpin] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<userType>({
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: userType) => {
    setIsSpin(true);
    await apiClient.post("/user/updateprofile", data).finally(() => {
      setIsSpin(false);
    });
    reset();
    location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full space-y-5 p-5 text-sm font-semibold text-deep-lagoon-blue"
    >
      <div className="space-y-0.5">
        <div>Full Name</div>
        <input
          type="text"
          {...register("fullname")}
          className="w-full rounded-md border px-2 py-1 text-base text-gray-500 outline-none"
        />
        {errors.fullname && (
          <p className="text-xs text-red-400">{errors.fullname.message}</p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Email</div>
        <input
          readOnly
          type="email"
          {...register("email")}
          className="w-full rounded-md border bg-seafoam-100 px-2 py-1 text-base text-gray-500 outline-none"
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Phone</div>
        <input
          type="tel"
          {...register("phone")}
          className="w-full rounded-md border px-2 py-1 text-base text-gray-500 outline-none"
        />
        {errors.phone && (
          <p className="text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Address</div>
        <input
          type="text"
          {...register("address")}
          className="w-full rounded-md border px-2 py-1 text-base text-gray-500 outline-none"
        />
        {errors.address && (
          <p className="text-xs text-red-400">{errors.address.message}</p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Pincode</div>
        <input
          type="text"
          {...register("pincode")}
          className="w-full rounded-md border px-2 py-1 text-base text-gray-500 outline-none"
        />
        {errors.pincode && (
          <p className="text-xs text-red-400">{errors.pincode.message}</p>
        )}
      </div>
      {/* Location input fields */}
      <button
        disabled={isSpin}
        type="submit"
        className="flex w-full items-center justify-center space-x-2 rounded-md bg-deep-lagoon-blue p-3 text-lg font-semibold text-white"
      >
        <p>Submit</p>
        {isSpin && <CircleNotch size={18} className="animate-spin" />}
      </button>
    </form>
  );
};

export default ProfileForm;
