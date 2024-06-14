import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type activeTabType = "COFFEE" | "DRINKS" | "FOOD";

export const ActiveTabContext = createContext<
  [activeTabType, Dispatch<SetStateAction<activeTabType>>]
>(["COFFEE", () => {}]);

const ActiveTabContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<activeTabType>("COFFEE");

  return (
    <ActiveTabContext.Provider value={[activeTab, setActiveTab]}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabContextProvider;
export const useActiveTab = () => useContext(ActiveTabContext);
