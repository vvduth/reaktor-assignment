import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { fetchData, DRONE_URL } from "../service";

const StateContext = createContext<any | null>(null);

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentDronesShown, setCurrentDronesShown] = useState<any>();



  useEffect(() => {
    fetchDrones();
    const interval = setInterval(() => {
      fetchDrones();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=> {
    console.log("current drones shown changed")
  }, [currentDronesShown])

  const fetchDrones = async () => {
    let res = await fetchData(DRONE_URL);
    console.log(res.children[1]);
    setCurrentDronesShown(res.children[1]);
  };
  return (
    <StateContext.Provider value={{currentDronesShown, fetchDrones}}>{children}</StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);