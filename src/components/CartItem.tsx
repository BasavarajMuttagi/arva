import { Minus, Plus } from "react-feather";
import useCoffeeStore, { Item } from "../store";
import { cloudFrontBaseUrl } from "../axios/apiClient";

const CartItem = (data: Item) => {
  const { addItem, removeItem, cart, setStoreId } = useCoffeeStore();
  const incrementCount = () => {
    const newItem = {
      ...data,
      count: data.count + 1,
    };
    removeItem(data.itemId);
    addItem(newItem);
  };

  const decrementCount = () => {
    if (data.count == 1 && cart.length == 1) {
      setStoreId("");
    }

    if (data.count == 1) {
      removeItem(data.itemId);
    } else {
      const newItem = {
        ...data,
        count: data.count - 1,
      };
      removeItem(data.itemId);
      addItem(newItem);
    }
  };
  return (
    <div>
      <div className="relative">
        <div className="flex h-36 items-center space-x-4 rounded-2xl bg-seafoam-100 p-4">
          <img
            src={`${cloudFrontBaseUrl}${data.imageUrl}`}
            alt="coffee"
            className="h-full w-1/3 rounded-xl object-cover object-center"
          />
          <div className="flex h-full w-2/3 flex-col justify-between text-deep-lagoon-blue">
            <p className="text-base font-bold">{data.name}</p>
            <div className="flex items-center space-x-4">
              <div className="space-x-4">
                <button className="rounded bg-deep-lagoon-blue px-2 py-1 text-white">
                  <Minus size={24} onClick={() => decrementCount()} />
                </button>
                <button className="rounded bg-deep-lagoon-blue px-2 py-1 text-white">
                  <Plus size={24} onClick={() => incrementCount()} />
                </button>
              </div>
              <div className="text-sm font-semibold">
                ₹{data.price * data.count}
              </div>
            </div>
            <p className="text-sm font-semibold">₹{data.price.toFixed(2)}</p>
          </div>
          <div className="absolute -right-2 -top-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-lagoon-blue text-xl font-semibold text-white">
              <div>{data.count}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
