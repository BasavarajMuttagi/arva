import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "../axios/apiClient";
import { useState } from "react";
import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import { userSignUpSchema, userSignUpType } from "../zod/schema";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [isSpin, setIsSpin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userSignUpType>({
    resolver: zodResolver(userSignUpSchema),
  });

  const onSubmit = async (data: userSignUpType) => {
    setIsSpin(true);
    await apiClient
      .post("/auth/signup", data)
      .then(() => {
        reset();
      })
      .finally(() => {
        setIsSpin(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-fit space-y-5 p-5 text-sm font-semibold text-deep-lagoon-blue"
    >
      <div className="space-y-0.5">
        <div>Full Name</div>
        <input
          type="text"
          {...register("fullname")}
          className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
        />
        {errors.fullname && (
          <p className="text-xs text-red-400">{errors.fullname.message}</p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Email</div>
        <input
          type="email"
          {...register("email")}
          className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Password</div>
        <input
          type="password"
          {...register("password")}
          className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
        />
        {errors.password && (
          <p className="text-xs text-red-400">{errors.password.message}</p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Confirm password</div>
        <input
          type="password"
          {...register("confirmpassword")}
          className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
        />
        {errors.confirmpassword && (
          <p className="text-xs text-red-400">
            {errors.confirmpassword.message}
          </p>
        )}
      </div>
      <div className="space-y-0.5">
        <div>Phone</div>
        <input
          type="tel"
          {...register("phone")}
          className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
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
          className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
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
          className="w-full rounded-md border p-2 text-base text-gray-500 outline-none"
        />
        {errors.pincode && (
          <p className="text-xs text-red-400">{errors.pincode.message}</p>
        )}
      </div>
      <button
        disabled={isSpin}
        type="submit"
        className="flex w-full items-center justify-center space-x-2 rounded-md bg-deep-lagoon-blue p-3 text-lg font-semibold text-white"
      >
        <p>Sign Up</p>
        {isSpin && <CircleNotch size={18} className="animate-spin" />}
      </button>
      <div className="space-y-6">
        <p className="text-center">or</p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex w-full items-center justify-center space-x-5 rounded-md border bg-white p-2.5 text-lg font-semibold text-deep-lagoon-blue shadow"
        >
          <p>Login</p>
          <ArrowRight size={18} weight="bold" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
