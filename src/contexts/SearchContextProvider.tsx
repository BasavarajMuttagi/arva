import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const SearchContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
export const useSearch = () => useContext(SearchContext);
