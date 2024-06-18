import { useQuery } from "@tanstack/react-query";
import apiClient from "../axios/apiClient";
import Loading from "./Loading";
import Error from "./Error";
import ProfileForm from "./ProfileForm";
import { UserProfileResponse } from "../types";
import useCoffeeStore from "../store";

const Profile = () => {
  const { displayName } = useCoffeeStore();
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
      <div className="py-1 text-center text-3xl font-semibold text-deep-lagoon-blue">
        {displayName}
      </div>
      <ProfileForm defaultValues={profile!} />
    </div>
  );
};

export default Profile;
