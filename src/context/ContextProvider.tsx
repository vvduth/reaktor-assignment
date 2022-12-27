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
import { useLocalStorage } from "../hooks/useLocalStorage";

const StateContext = createContext<any | null>(null);

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentDronesShown, setCurrentDronesShown] = useState<any>();

  // storing list of ip that violated every request
  const [serialIpsArray, setSerialIpsArray] = useState<any[]>();
  const [violatedPilots, setViolatedPilot] = useState<any[]>([]);

  // filtered value
  const item = window.localStorage.getItem(
    "violatedPilotsDroneNumber"
  ) as any;
  //const [persistDroneSerials, setPeristDroneSerials] = useLocalStorage('violatedPilotsDroneNumber')
  // get all ip overtime, inclding duplcated value
  const [collectedDroneSerials, setCollectedDroneSerials] = useState<any[]>([]);
  const [timeStamp, setTimeStamp] = useState<any>();

  // send request every 2 secs 
  useEffect(() => {
    fetchDrones();
    const interval = setInterval(() => {
      fetchDrones();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    let removeDuplicateDroneSerialNumbers = [new Set(collectedDroneSerials)];
    //setPeristDroneSerials([...removeDuplicateDroneSerialNumbers[0]]);
  }, [collectedDroneSerials]);

  
  const fetchDrones = async () => {
    // fetch all drones
    let res = await fetchData(DRONE_URL);
    setCurrentDronesShown(res.children[1]);
    setTimeStamp(res.children[1].attributes.snapshotTimestamp);

    let violatedPilotsTemp: any[] = [];

    // the array to store the serial number of those violated drones if there is any
    let serialArr: any[] = [];

    for (let item of res.children[1].children) {
      let X_val = Number(item.getElementsByTagName("positionX")[0].value);
      let Y_val = Number(item.getElementsByTagName("positionY")[0].value);

      if (!violateCheckPilot(Number(X_val), Number(Y_val))) {
        let serialId = item.getElementsByTagName("serialnumber")[0].value;
        //let pilotFromId = await fetchPilot(serialId);
        let pilotFromId:any[] = []
        let pilotInfoIncludeId = { ...pilotFromId, droneNum: serialId };

        serialArr.push(serialId);
        violatedPilotsTemp.push(pilotInfoIncludeId);
      }
    }

    // get raw data for all violated ips with duplicated
    setSerialIpsArray(serialArr);
    setCollectedDroneSerials((current) => [...current, ...serialArr]);
    
    // this will contain all the violated pilot in each request
    let arr3 = [new Set([...violatedPilots, ...violatedPilotsTemp])];
    setViolatedPilot((current) => [current, ...arr3[0]]);
  };
  return (
    <StateContext.Provider
      value={{
        currentDronesShown,
        fetchDrones,
        serialIpsArray,
        violatedPilots,
        timeStamp,
        // persistDroneSerials
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
