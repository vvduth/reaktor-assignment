import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";
import PilotTableBody from "./PilotTableBody";
import PilotTableHead from "./PilotTableHead";

const Pilots = () => {
  const { violatedPilots, serialIpsArray } = useStateContext() as any;
  
  return (
    <>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <PilotTableHead />

          {violatedPilots && violatedPilots.length > 0 ? (<>
          
            <PilotTableBody pilots = {violatedPilots}/> 
          </>) : <>no</>}
        </table>
      </div>
    </>
  );
};

export default Pilots;
