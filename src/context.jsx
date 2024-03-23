import { useContext, useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        departure,
        setDeparture,
        destination,
        setDestination,
        date,
        setDate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
