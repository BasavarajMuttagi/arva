import { HeartStraight, Star } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const CoffeeShopCard = ({
  name,
  rating,
  reviewsCount = 4,
  distance,
}: {
  name: string;
  rating: number;
  reviewsCount: number;
  distance: number;
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/shop")} className="cursor-pointer">
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/664313320/photo/espresso-coffee-cup-with-beans-on-vintage-table.jpg?s=612x612&w=0&k=20&c=kaF8P4KuAlVhAm9zNcq5DxSimOv8w3yVQynS4dwPBHc="
          alt="coffee"
          className="aspect-[9/16] w-full rounded-xl h-fit max-h-48 object-cover object-center"
        />
        <div className="absolute -top-3 -right-2">
          <RoundedBackgroundHeart />
        </div>
      </div>
      <div className="text-deep-lagoon-blue">
        <p className="font-bold text-base">{name}</p>
        <div className="flex items-end space-x-1">
          <Star size={16} weight="fill" className="text-gold" />
          <div className="flex items-end space-x-2 font-semibold text-sm">
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

export const RoundedBackgroundHeart = () => {
  return (
    <div className="relative">
      <div className="bg-seafoam-100 w-10 h-10 rounded-full border-[3px] border-white"></div>
      <HeartStraight
        size={24}
        className="absolute top-2 left-2 text-deep-lagoon-blue"
        weight="bold"
      />
    </div>
  );
};
