import useCoffeeStore from "../store";

const ProfilePicture = () => {
  const { logout } = useCoffeeStore();
  return (
    <img
      src="https://picsum.photos/id/237/200/300"
      alt="profile"
      className="h-12 w-12 rounded-full"
      onClick={() => logout()}
    />
  );
};

export default ProfilePicture;
