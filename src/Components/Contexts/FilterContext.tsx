import { createContext, useContext, useState } from "react";

const FilterContext = createContext({
  filter: "",
  setFilter: (value: string) => {},
});

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState("");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
