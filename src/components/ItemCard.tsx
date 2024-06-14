import AddItem from "./AddItem";

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
        <AddItem />
      </div>
    </div>
  );
};

export default ItemCard;
