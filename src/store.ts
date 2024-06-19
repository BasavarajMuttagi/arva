import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storageModule = {
  name: "coffee-shop-storage",
  storage: createJSONStorage(() => sessionStorage),
};

type store = {
  token: string;
  displayName: string;
  selectedStoreId: string;
  cart: Item[];
  addItem: (data: Item) => void;
  setToken: (newToken: string) => void;
  setDisplayName: (name: string) => void;
  logout: () => void;
  setStoreId: (newStoreId: string) => void;
  removeItem: (itemId: string) => void;
  incrementItem: (newItem: Item) => void;
};

export type Item = {
  name: string;
  description: string;
  price: number;
  itemId: string;
  count: number;
};

const useCoffeeStore = create<store>()(
  persist(
    (set, get) => ({
      token: "",
      displayName: "",
      cart: [],
      selectedStoreId: "",
      setStoreId: (newStoreId) => set(() => ({ selectedStoreId: newStoreId })),
      setToken: (newToken) => set(() => ({ token: newToken })),
      setDisplayName: (name: string) => set(() => ({ displayName: name })),
      addItem: (newItem: Item) =>
        set(() => ({
          cart: [...get().cart, newItem].sort((a, b) => a.price - b.price),
        })),

      incrementItem: (newItem: Item) =>
        set(() => ({
          cart: [...get().cart, newItem].sort((a, b) => a.price - b.price),
        })),

      removeItem: (itemId: string) =>
        set(() => ({
          cart: get()
            .cart.filter((eachItem) => eachItem.itemId !== itemId)
            .sort((a, b) => a.price - b.price),
        })),

      logout: () => {
        set(() => ({
          token: "",
          displayName: "",
          cart: [],
          selectedStoreId: "",
        }));
      },
    }),
    storageModule,
  ),
);
export default useCoffeeStore;
