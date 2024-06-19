import { useActiveTab } from "../contexts/ActiveTabContextProvider";
import { CoffeeShopWithImages, Product } from "../types";
import ItemCard from "./ItemCard";

const FoodItems = ({
  products,
  shop,
}: {
  products: Product[] | undefined;
  shop: CoffeeShopWithImages | undefined;
}) => {
  const [activeTab] = useActiveTab();
  return (
    <>
      {products
        ?.filter((eachProduct) => eachProduct.category === activeTab)
        .map((eachProduct) => (
          <ItemCard
            key={eachProduct._id}
            description={eachProduct.description}
            imageUrl={""}
            name={eachProduct.name}
            price={eachProduct.price}
            itemId={eachProduct._id}
            shop={shop}
          />
        ))}
    </>
  );
};

export default FoodItems;
