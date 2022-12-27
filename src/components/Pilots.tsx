import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";
import PilotTableBody from "./PilotTableBody";
import PilotTableHead from "./PilotTableHead";

const Pilots = () => {
  const { violatedPilots, serialIpsArray } = useStateContext() as any;

  const [pilotFetchedFromPeristDrone, setPilotFetchedFromPeristDrone] = useState<any[]>() ;
  
  const fetchPilotFromPersistData = async () => {
    let pilots = [] as any ; 
    
    setPilotFetchedFromPeristDrone(pilots)
  }
  
  useEffect(()=> {
    fetchPilotFromPersistData()
  },[]) 
  
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
