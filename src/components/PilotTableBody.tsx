import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";
import PilotTime from "./PilotTime";

const PilotTableBody = ({ pilots }: any) => {

  const {onClickToDisplay} = useStateContext() as any ; 
  useEffect(() => {
    //console.log(pilots)
    //console.log(Date.now())
  }, []);
  return (
    <tbody  className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height: "50vh"}}>
      {pilots.map((pilot: any) => (
        <tr
          className="flex w-full mb-4"
          key={pilot.pilotId}
        >
          <td
            scope="row"
            className="p-4 w-1/4 text-white"
          >
            {/* {pilot.phoneNumber} */}
          </td>
          <td
            scope="row"
            className="p-4 w-1/4 text-white"
          >
            {/* {pilot.firstName} {pilot.lastName} */}
          </td>
          <td
            scope="row"
            className="p-4 w-1/4 text-white"
          >
            {/* {pilot.email} */}
          </td>
          <td
            scope="row"
            className="p-4 w-1/4 text-white"
          >
            {/* <PilotTime validUntil={pilot.validUntil} /> */}
          </td>
          <td
            scope="row"
            className="py-4 px-6 w-1/4 font-bold whitespace-nowrap text-white"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                onClickToDisplay(pilot.x, pilot.y )
              }}
            
            >
              View
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PilotTableBody;
