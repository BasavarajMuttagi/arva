import apiClient from "../axios/apiClient";
import { HeartStraight } from "@phosphor-icons/react";
export const RoundedBackgroundHeart = ({
  shopId,
  isFavorite,
}: {
  shopId: string;
  isFavorite: boolean;
}) => {
  const handleLike = async () => {
    await apiClient.post("/user/addShopToFavorite", {
      shopId,
      isFavorite: !isFavorite,
    });
  };
  return (
    <div className="relative" onClick={() => handleLike()}>
      <div className="h-10 w-10 rounded-full border-[3px] border-white bg-seafoam-100"></div>
      {isFavorite ? (
        <HeartStraight
          size={24}
          className="absolute left-2 top-2 fill-red-500"
          weight="fill"
        />
      ) : (
        <HeartStraight
          size={24}
          className="absolute left-2 top-2 text-deep-lagoon-blue"
          weight="bold"
        />
      )}
    </div>
  );
};
