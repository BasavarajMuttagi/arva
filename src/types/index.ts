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
  location: {
    type: "Point";
    coordinates: [number, number];
  };
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  dietType: "VEG" | "NON-VEG";
  category: "COFFEE" | "DRINKS" | "FOOD";
  imageUrl: string;
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

type Metadata = {
  id: string;
};

type ProductData = {
  metadata: Metadata;
  name: string;
  description: string;
  images: string[];
};

type PriceData = {
  product_data: ProductData;
  currency: string;
  unit_amount: number;
};

type Item = {
  price_data: PriceData;
  quantity: number;
  _id: string;
};

type ShopInfo = {
  _id: string;
  name: string;
  address: string;
};

type Address = {
  title: string;
};

export type OrderData = {
  address: Address;
  _id: string;
  shopId: ShopInfo;
  items: Item[];
  paymentStatus: "Processing" | "Success" | "Failure";
};

export type Orders = {
  message: string;
  data: OrderData[];
};
