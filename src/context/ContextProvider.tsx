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
import { violateCheckPilot } from "../utils/violateCheck";
import { fetchPilot } from "../service";

const StateContext = createContext<any | null>(null);

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentDronesShown, setCurrentDronesShown] = useState<any>();

  // storing list of ip that violated every request
  const [serialIpsArray, setSerialIpsArray] = useState<any[]>();
  const [violatedPilots, setViolatedPilot] = useState<any[]>([]);

  useEffect(() => {
    fetchDrones();
    const interval = setInterval(() => {
      fetchDrones();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  //   useEffect(() => {
  //     fetchPilotBasedAllSerialIds()
  //   }, [serialIpsArray]);

  const fetchPilotBasedAllSerialIds = async () => {
    if (serialIpsArray) {
      let pilotInforArray = [] as any[];
      serialIpsArray.forEach(async (id: any) => {
        let pilotsInfo = await fetchPilot(id);
        pilotInforArray.push(pilotsInfo);
      });
      //setViolatedPilot(pilotInforArray) ;
    }
  };

  function containsObject(obj: any) {
    let a = false 
    violatedPilots.forEach((pilot) =>  {
        if (pilot.pilotId === obj.pilotId ) {
            console.log(pilot.pilotId + " and " + obj.pilotId)
            a = true ; 
        } else {
            console.log(pilot.pilotId + " and " + obj.pilotId)
            a = false 
        }
    })
    return  a ; 
  }

  const fetchDrones = async () => {
    let res = await fetchData(DRONE_URL);
    setCurrentDronesShown(res.children[1]);
    //setSerialIpsArray(res.children[1].children[0].children)
    //console.log(res.children[1].children[2].getElementsByTagName('serialnumber'))
    let serialArr: any[] = [];
    res.children[1].children.forEach(async (item: any) => {
      //console.log(item.getElementsByTagName('serialnumber')[0].value);
      let X_val = Number(item.getElementsByTagName("positionX")[0].value);
      let Y_val = Number(item.getElementsByTagName("positionY")[0].value);

      if (!violateCheckPilot(Number(X_val), Number(Y_val))) {
        serialArr.push(item.getElementsByTagName("serialnumber")[0].value);
        let serialId = item.getElementsByTagName("serialnumber")[0].value;
        let pilotFromId = await fetchPilot(serialId);
        let pilotInfoIncludeId = { ...pilotFromId, droneNum: serialId };
        if (containsObject(pilotInfoIncludeId)) {
            console.log("exist") ; 
        } else {
            console.log(" no exist")
            setViolatedPilot(current => [...current, pilotInfoIncludeId])
        }
        //setViolatedPilot(current => [...current, pilotInfoIncludeId])
      }
    });
    setSerialIpsArray(serialArr);
  };
  return (
    <StateContext.Provider
      value={{
        currentDronesShown,
        fetchDrones,
        serialIpsArray,
        violatedPilots,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
