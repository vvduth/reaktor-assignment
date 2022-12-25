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
  const [serialIpsArray, setSerialIpsArray ] = useState<any[]>() ; 



  useEffect(() => {
    fetchDrones();
    const interval = setInterval(() => {
      fetchDrones();
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  const fetchDrones = async () => {
    let res = await fetchData(DRONE_URL);
    setCurrentDronesShown(res.children[1]);
    //setSerialIpsArray(res.children[1].children[0].children)
    //console.log(res.children[1].children[2].getElementsByTagName('serialnumber'))
    let serialArr: any[] = []
    res.children[1].children.forEach((item: any )=> {
        //console.log(item.getElementsByTagName('serialnumber')[0].value);
        serialArr.push(item.getElementsByTagName('serialnumber')[0].value)
    })
    setSerialIpsArray(serialArr) ;
  };
  return (
    <StateContext.Provider value={{currentDronesShown, fetchDrones, serialIpsArray}}>{children}</StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);