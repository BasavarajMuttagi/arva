import useCoffeeStore from "../store";
import { CoffeeShopWithImages } from "../types";
import AddItem from "./AddItem";
import RemoveItem from "./RemoveItem";

const ItemCard = ({
  name,
  description,
  price,
  itemId,
  shop,
}: {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  itemId: string;
  shop: CoffeeShopWithImages | undefined;
}) => {
  const { addItem, setStoreId, cart, removeItem } = useCoffeeStore();
  const isItemInArray = () => {
    const temp = cart.filter((eachItem) => eachItem.itemId === itemId);
    return temp.length > 0;
  };
  const addItemToCart = () => {
    if (cart.length == 0) {
      setStoreId(shop?._id!);
    }
    addItem({
      description,
      itemId,
      name,
      price,
      count: 1,
    });
  };

  const removeItemFromCart = () => {
    if (cart.length == 1) {
      setStoreId("");
    }
    removeItem(itemId);
  };

  return (
    <div className="relative">
      <div className="flex h-36 items-center space-x-4 rounded-2xl bg-seafoam-100 p-4">
        <img
          src="https://media.istockphoto.com/id/664313320/photo/espresso-coffee-cup-with-beans-on-vintage-table.jpg?s=612x612&w=0&k=20&c=kaF8P4KuAlVhAm9zNcq5DxSimOv8w3yVQynS4dwPBHc="
          alt="coffee"
          className="h-full w-1/3 rounded-xl object-cover object-center"
        />
        <div className="flex h-full w-2/3 flex-col justify-between text-deep-lagoon-blue">
          <p className="text-base font-bold">{name}</p>
          <p className="text-sm font-medium">{description}</p>
          <p className="text-sm font-semibold">₹{price.toFixed(2)}</p>
        </div>
      </div>
      <div className="absolute -right-2 -top-3">
        {isItemInArray() ? (
          <RemoveItem onClick={() => removeItemFromCart()} />
        ) : (
          <AddItem onClick={() => addItemToCart()} />
        )}
      </div>
    </div>
  );
};

export default ItemCard;
