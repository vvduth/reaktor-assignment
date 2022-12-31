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
  
  const [displayX, setDisplayX] = useState<any>() ;
  const [displayY, setDisplayY] = useState<any>() ;

  const onClickToDisplay = (x: any, y:any) => {
    setDisplayX(x); 
    setDisplayY(y)
  }
  return (
    <StateContext.Provider
      value={{
        displayX, 
        displayY, 
        onClickToDisplay
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
