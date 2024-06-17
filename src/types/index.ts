export type CoffeeShopData = {
  _id: string;
  name: string;
  address: string;
  images: string[];
  distance: number;
  isFavorite: boolean;
  isBookmarked: boolean;
};

export type CoffeeShopWithImages = {
  _id: string;
  name: string;
  address: string;
  images: string[];
  products: Product[];
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  dietType: "VEG" | "NON-VEG";
  category: "COFFEE" | "DRINKS" | "FOOD";
};



type Location = {
  coordinates: number[];
};

export type UserProfileResponse = {
  location: Location;
  _id: string;
  fullname: string;
  email: string;
};