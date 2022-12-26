import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";
import PilotTableBody from "./PilotTableBody";
import PilotTableHead from "./PilotTableHead";

const Pilots = () => {
  const { violatedPilots, serialIpsArray , persistDroneSerials} = useStateContext() as any;

  const [pilotFetchedFromPeristDrone, setPilotFetchedFromPeristDrone] = useState<any[]>() ;
  
  const fetchPilotFromPersistData = async () => {
    let pilots = [] ; 
    for (let item of persistDroneSerials) {
      let onePilot = await fetchPilot(item) ; 
      pilots.push(onePilot)
    }
    setPilotFetchedFromPeristDrone(pilots)
  }
  
  useEffect(()=> {
    fetchPilotFromPersistData()
   console.log(pilotFetchedFromPeristDrone)
  },[persistDroneSerials]) 
  
  return (
    <>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <PilotTableHead />

          {pilotFetchedFromPeristDrone && pilotFetchedFromPeristDrone.length > 0 ? (<>
          
            <PilotTableBody pilots = {pilotFetchedFromPeristDrone}/> 
          </>) : <>no</>}
        </table>
      </div>
    </>
  );
};

export default Pilots;
