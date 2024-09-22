import React, { createContext, useContext, useState, ReactNode } from "react";
import { Driver } from "./interfaces/driver";

interface MyContextType {
  drivers: Driver[] | undefined;
  selectedDriver: Driver | undefined;
  setDrivers: (drivers: Driver[]) => void;
  setSelectedDriver: (driver: Driver | undefined) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [selectedDriver, setSelectedDriver] = useState<Driver | undefined>(
    undefined
  );

  return (
    <MyContext.Provider
      value={{
        drivers,
        selectedDriver,
        setDrivers,
        setSelectedDriver,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};
