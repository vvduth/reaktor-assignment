import React, { useEffect, useState } from "react";
import { violateCheckPilot } from "../utils/violateCheck";
import PilotTableBody from "./PilotTableBody";
import PilotTableHead from "./PilotTableHead";
import { getViolatedPilots } from "../store/pilotsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Pilots = () => {
  
  const dispatch = useAppDispatch() ;
  
  const pilots = useAppSelector((state) => state.pilots.pilots)

  
  
  useEffect(()=> {
    console.log(pilots)
  },[dispatch, pilots]) 
  
  return (
    <>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <PilotTableHead />

          {pilots ? (<>
          
            <PilotTableBody pilots = {pilots}/> 
          </>) : <>no</>}
        </table>
      </div>
    </>
  );
};

export default Pilots;
