import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import Loading from "./Loading";
import Error from "./Error";
import ProfileForm from "./ProfileForm";
import { UserProfileResponse } from "../types";
import { motion } from "framer-motion";

const Profile = () => {
  const getUserProfile = async () => {
    const records = await apiClient.get(`/user/profile`);
    return records;
  };

  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => (await getUserProfile()).data as UserProfileResponse,
  });
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: "-15%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6 }}
      className="h-full overflow-y-auto bg-white pb-40"
    >
      <div className="py-1 text-center text-3xl font-semibold text-deep-lagoon-blue">
        Profile
      </div>
      <ProfileForm defaultValues={profile!} />
    </motion.div>
  );
};

export default Profile;
