import React, { useEffect, useState } from "react";
import { violateCheckPilot } from "../utils/violateCheck";
import PilotTableBody from "./PilotTableBody";
import PilotTableHead from "./PilotTableHead";
import { filterExpriedPilots, getFullPilotInfoFromSerialNumber, getViolatedPilots } from "../store/pilotsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Pilots = () => {
  
  const dispatch = useAppDispatch() ;
  
  const pilots = useAppSelector((state) => state.pilots.pilots)

  const drones = useAppSelector((state) => state.drones.drones);
  
  useEffect(()=> {
    dispatch(filterExpriedPilots())
    console.log("this has been called every 2 sec probably")
  },[ dispatch])

  useEffect(()=> {
    console.log("the array changed")
    dispatch(getFullPilotInfoFromSerialNumber())
  },[pilots.length])
  
  return (
    <>
      <div className="overflow-x-auto relative">
        <table className="text-left w-full">
          <PilotTableHead />

          {(pilots && pilots.length)  ? (<>
          
            <PilotTableBody pilots = {pilots}/> 
          </>) : <p className="text-white">Loading data for the last 10 minutes</p>}
        </table>
      </div>
    </>
  );
};

export default Pilots;
