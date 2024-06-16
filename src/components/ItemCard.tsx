import AddItem from "./AddItem";

const ItemCard = ({
  name,
  description,
  price,
  itemId,
}: {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  itemId: string;
}) => {
  return (
    <div className="relative">
      <div className="bg-seafoam-100 flex items-center p-5 rounded-2xl space-x-4">
        <img
          src="https://media.istockphoto.com/id/664313320/photo/espresso-coffee-cup-with-beans-on-vintage-table.jpg?s=612x612&w=0&k=20&c=kaF8P4KuAlVhAm9zNcq5DxSimOv8w3yVQynS4dwPBHc="
          alt="coffee"
          className="aspect-square rounded-xl h-fit max-h-32 object-cover object-center w-1/2"
        />
        <div className="text-deep-lagoon-blue space-y-3 w-1/2">
          <p className="font-bold text-base">{name}</p>
          <p className="text-sm font-normal">{description}</p>
          <p className="text-sm font-semibold">₹{price.toFixed(2)}</p>
        </div>
      </div>
      <div className="absolute -top-3 -right-2">
        <AddItem itemId={itemId} />
      </div>
    </div>
  );
};

export default ItemCard;
