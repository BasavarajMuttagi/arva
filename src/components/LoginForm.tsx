import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userLoginSchema, userLoginType } from "../zod/schema";
import apiClient from "../axios/apiClient";
import { useState } from "react";
import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import useCoffeeStore from "../store";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { allAddressResponse } from "./AllAddresses";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setToken, setDisplayName, setAddress, setSelectedAddress } =
    useCoffeeStore();
  const [isSpin, setIsSpin] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<userLoginType>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit = async (data: userLoginType) => {
    setIsSpin(true);
    await apiClient
      .post("/auth/login", data)
      .then((res: AxiosResponse) => {
        setToken(res.data.token);
        setDisplayName(res.data.user.fullname);
        return res;
      })
      .then(async (res: AxiosResponse) => {
        const getAllAddresses = async () => {
          const records = await apiClient.get("/address/getall", {
            headers: { Authorization: `Bearer ${res.data.token}` },
          });
          return records;
        };
        const result = (await getAllAddresses()).data as allAddressResponse[];

        if (result.length) {
          setSelectedAddress(result[0]);
          setAddress(result);
        }
        navigate("/");
        reset();
        location.reload();
      })
      .catch(() => {
        toast.error("Something Went wrong");
      })
      .finally(() => {
        setIsSpin(false);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-fit space-y-5 p-5 text-sm font-semibold text-deep-lagoon-blue"
      >
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
        <button
          disabled={isSpin}
          type="submit"
          className="flex w-full items-center justify-center space-x-2 rounded-md bg-deep-lagoon-blue p-3 text-lg font-semibold text-white shadow"
        >
          <p>Login</p>
          {isSpin && <CircleNotch size={18} className="animate-spin" />}
        </button>
        <div className="space-y-6">
          <p className="text-center">or</p>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="flex w-full items-center justify-center space-x-5 rounded-md border bg-white p-2.5 text-lg font-semibold text-deep-lagoon-blue shadow"
          >
            <p>Sign Up</p>
            <ArrowRight size={18} weight="bold" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
