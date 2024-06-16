import { useActiveTab } from "../contexts/ActiveTabContextProvider";
import { Product } from "../types";
import ItemCard from "./ItemCard";

const FoodItems = ({ products }: { products: Product[] | undefined }) => {
  const [activeTab] = useActiveTab();
  return (
    <>
      {products
        ?.filter((eachProduct) => eachProduct.category === activeTab)
        .map((eachProduct) => (
          <ItemCard
            description={eachProduct.description}
            imageUrl={""}
            name={eachProduct.name}
            price={eachProduct.price}
            itemId={eachProduct._id}
          />
        ))}
    </>
  );
};

export default FoodItems;
