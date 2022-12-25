import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";

const Pilots = () => {
  const { serialIpsArray } = useStateContext() as any;
  useEffect(() => {
    fetchPilotBasedAllSerialIds()
  }, [serialIpsArray]);

  const fetchPilotBasedAllSerialIds = () => {
    if (serialIpsArray) {
        serialIpsArray.forEach((id: any) => {
            fetchPilot(id) ; 
        });
    }  
  }
  return <div></div>;
};

export default Pilots;
