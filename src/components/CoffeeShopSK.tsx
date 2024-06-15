import Skeleton from "react-loading-skeleton";
const CoffeeShopSK = () => {
  return (
    <div>
      <div className="relative">
        <Skeleton className="aspect-[9/16] w-full rounded-xl h-fit max-h-48 object-cover object-center" />
        <div className="absolute -top-3 -right-2">
          <Skeleton className="w-10 h-10 rounded-full border-[3px] border-white" />
        </div>
      </div>
      <div className="text-deep-lagoon-blue">
        <p className="font-bold text-base">
          <Skeleton />
        </p>
        <div className="flex items-center space-x-1">
          <Skeleton className="text-gold h-[16px] w-[15px]" />
          <p>
            <Skeleton className="w-[8.3rem]" />
          </p>
        </div>
        <p className="text-sm font-semibold">
          <Skeleton />
        </p>
      </div>
    </div>
  );
};

export default CoffeeShopSK;
