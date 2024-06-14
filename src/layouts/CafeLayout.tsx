import { Plus, Star } from "@phosphor-icons/react";
import { ReactNode } from "react";
import Drink from "../assets/Drink";
import Food from "../assets/Food";
import { Coffee } from "react-feather";

const CafeLayout = () => {
  return (
    <div className="h-screen bg-red-300">
      <SwipeUpScreen />
    </div>
  );
};

export default CafeLayout;

const SwipeUpScreen = () => {
  return (
    <div className="h-screen rounded-t-3xl bg-white p-5 translate-y-20 space-y-10">
      <div className="text-deep-lagoon-blue pt-10 space-y-2">
        <p className="font-semibold text-xl">Haus Coffee</p>
        <div className="space-y-1">
          <div className="flex items-end space-x-1">
            <Star size={16} weight="fill" className="text-gold" />
            <div className="flex items-end space-x-2 font-semibold text-sm">
              <p>{4.5}</p>
              <p className="text-disabled">{`${429} reviews`}</p>
            </div>
          </div>
          <p className="text-sm font-semibold">San Francisco, CA</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <IconButton
          title="Coffee"
          children={<Coffee className="h-[24px] w-[24px]" />}
        />
        <IconButton
          title="Drinks"
          children={<Drink className="h-[24px] w-[24px]" />}
        />
        <IconButton
          title="Food"
          children={<Food className="h-[24px] w-[24px]" />}
        />
      </div>
      <div className="space-y-8">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

const IconButton = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="cursor-pointer space-y-2 p-5  text-disabled fill-disabled rounded-3xl  flex flex-col items-center min-w-24 hover:text-deep-lagoon-blue hover:fill-deep-lagoon-blue hover:bg-seafoam-100">
      {children}
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

const ItemCard = () => {
  return (
    <div className="relative">
      <div className="w-full bg-seafoam-100 flex items-center p-5 rounded-2xl space-x-4">
        <img
          src="https://media.istockphoto.com/id/664313320/photo/espresso-coffee-cup-with-beans-on-vintage-table.jpg?s=612x612&w=0&k=20&c=kaF8P4KuAlVhAm9zNcq5DxSimOv8w3yVQynS4dwPBHc="
          alt="coffee"
          className="aspect-[9/16] w-full rounded-xl h-fit max-h-32 object-cover object-center"
        />
        <div className="text-deep-lagoon-blue space-y-3">
          <p className="font-bold text-base">Cafè mocha</p>
          <p className="text-sm font-normal">
            A chocolate-flavored warm beverage that is a variant of a café latte
          </p>
          <p className="text-sm font-semibold">$3.00</p>
        </div>
      </div>
      <div className="absolute -top-3 -right-2">
        <RoundedBackgroundAddItem />
      </div>
    </div>
  );
};

const RoundedBackgroundAddItem = () => {
  return (
    <div className="relative">
      <div className="bg-deep-lagoon-blue w-10 h-10 rounded-full border-[3px] border-white"></div>
      <Plus
        size={24}
        className="absolute top-2 left-2 text-white"
        weight="bold"
      />
    </div>
  );
};
