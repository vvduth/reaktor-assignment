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
  // storing list of ip that violated every request
  const [serialIpsArray, setSerialIpsArray] = useState<any[]>();
  const [violatedPilots, setViolatedPilot] = useState<any[]>([]);

  // filtered value
  const item = window.localStorage.getItem("violatedPilotsDroneNumber") as any;

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
  }, [collectedDroneSerials]);

  const fetchDrones = async () => {
    // fetch all drones

    //setTimeStamp(res.children[1].attributes.snapshotTimestamp);

    let violatedPilotsTemp: any[] = [];

    // the array to store the serial number of those violated drones if there is any
    let serialArr: any[] = [];

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
