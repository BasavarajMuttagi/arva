import Skeleton from "react-loading-skeleton";
const CoffeeShopSK = () => {
  return (
    <div>
      <div className="relative">
        <Skeleton className="aspect-[9/16] h-fit max-h-48 w-full rounded-xl object-cover object-center" />
        <div className="absolute -right-2 -top-3">
          <Skeleton className="h-10 w-10 rounded-full border-[3px] border-white" />
        </div>
      </div>
      <div className="text-deep-lagoon-blue">
        <p className="text-base font-bold">
          <Skeleton />
        </p>
        <div className="flex items-center space-x-1">
          <Skeleton className="h-[16px] w-[15px] text-gold" />
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
