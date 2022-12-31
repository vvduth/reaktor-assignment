import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";


const StateContext = createContext<any | null>(null);

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  
  return (
    <StateContext.Provider
      value={{
        
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
