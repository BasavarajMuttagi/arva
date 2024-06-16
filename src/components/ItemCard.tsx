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
      <div className="bg-seafoam-100 flex items-center  rounded-2xl space-x-4 h-36 p-4">
        <img
          src="https://media.istockphoto.com/id/664313320/photo/espresso-coffee-cup-with-beans-on-vintage-table.jpg?s=612x612&w=0&k=20&c=kaF8P4KuAlVhAm9zNcq5DxSimOv8w3yVQynS4dwPBHc="
          alt="coffee"
          className="rounded-xl   w-1/3 h-full object-cover object-center"
        />
        <div className="text-deep-lagoon-blue  w-2/3 flex flex-col justify-between h-full">
          <p className="font-bold text-base">{name}</p>
          <p className="text-sm font-medium">{description}</p>
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
