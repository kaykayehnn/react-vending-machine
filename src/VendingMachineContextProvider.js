import { createContext, useContext, useState } from "react";

const VendingMachineContext = createContext();

export function useVending() {
  const context = useContext(VendingMachineContext);

  return context;
}

function VendingMachineContextProvider({ children }) {
  const [price, setPrice] = useState(null);
  const [value, setValue] = useState(0);

  const insertCoin = (coin) => setValue((value) => value + coin);
  const buy = (price) => {
    if (price > value) {
      throw new Error(`Insert ${(price - value).toFixed(2)} more`);
    }

    setValue((value) => value - price);
  };
  const reset = () => setValue(0);

  return (
    <VendingMachineContext.Provider
      value={{
        text: price || value,
        value,
        setPrice,
        insertCoin,
        buy,
        reset,
      }}
    >
      {children}
    </VendingMachineContext.Provider>
  );
}

export default VendingMachineContextProvider;
