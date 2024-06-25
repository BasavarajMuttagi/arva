import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
export type activeSortType = "Rating" | "Distance";
export const SortContext = createContext<
  [activeSortType, Dispatch<SetStateAction<activeSortType>>]
>(["Distance", () => {}]);

const SortContextProvider = ({ children }: { children: ReactNode }) => {
  const [SortTerm, setSortTerm] = useState<activeSortType>("Distance");

  return (
    <SortContext.Provider value={[SortTerm, setSortTerm]}>
      {children}
    </SortContext.Provider>
  );
};

export default SortContextProvider;
export const useSort = () => useContext(SortContext);
