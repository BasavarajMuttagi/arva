import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import ProfileForm from "../components/ProfileForm";
import { UserProfileResponse } from "../types";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ProfileLayout = () => {
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
    <div className="h-screen overflow-y-auto bg-white">
      <ProfileForm defaultValues={profile!} />
    </div>
  );
};

export default ProfileLayout;