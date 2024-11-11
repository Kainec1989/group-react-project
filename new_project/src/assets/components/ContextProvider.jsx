import { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [page, setPage] = useState("");
  return (
    <MyContext.Provider value={{ page, setPage }}>
      {children}
    </MyContext.Provider>
  );
}
