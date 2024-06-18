import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import Loading from "./Loading";
import Error from "./Error";
import ProfileForm from "./ProfileForm";
import { UserProfileResponse } from "../types";

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
    <div className="h-full overflow-y-auto bg-white">
      <ProfileForm defaultValues={profile!} />
    </div>
  );
};

export default Profile;
