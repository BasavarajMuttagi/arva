import { Star } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { RoundedBackgroundHeart } from "./RoundedBackgroundHeart";
import { cloudFrontBaseUrl } from "../axios/apiClient";

const CoffeeShopCard = ({
  name,
  rating,
  reviewsCount = 4,
  distance,
  shopId,
  isFavorite = false,
  images
}: {
  name: string;
  rating: number;
  reviewsCount: number;
  distance: number;
  shopId: string;
  isFavorite: boolean;
  images :string[]
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/shop/${shopId}`)} className="cursor-pointer">
      <div className="relative">
        <img
          src={`${cloudFrontBaseUrl}${images[0]}`}
          alt="coffee"
          className="aspect-[9/16] h-fit max-h-48 w-full rounded-xl object-cover object-center"
        />
        <div className="absolute -right-2 -top-3">
          <RoundedBackgroundHeart shopId={shopId} isFavorite={isFavorite} />
        </div>
      </div>
      <div className="text-deep-lagoon-blue">
        <p className="text-base font-bold">{name}</p>
        <div className="flex items-end space-x-1">
          <Star size={16} weight="fill" className="text-gold" />
          <div className="flex items-end space-x-2 text-sm font-semibold">
            <p>{rating}</p>
            <p className="text-disabled">{`${reviewsCount} reviews`}</p>
          </div>
        </div>
        <p className="text-sm font-semibold">
          {(distance / 1000).toFixed(1)} km
        </p>
      </div>
    </div>
  );
};

export default CoffeeShopCard;
