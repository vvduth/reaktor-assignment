import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";
import PilotTime from "./PilotTime";

const PilotTableBody = ({ pilots }: any) => {

  useEffect(()=> {
    //console.log(pilots)
    console.log(Date.now())
  }, [])
  return (
    <>
      {pilots.map((pilot: any) => (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white font-bold"
          key={pilot.pilotId}
        >
          <td
            scope="row"
            className="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            {pilot.phoneNumber}
          </td>
          <td
            scope="row"
            className="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            {pilot.firstName}
          </td>
          <td
            scope="row"
            className="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            {pilot.lastName}
          </td>
          <td
            scope="row"
            className="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            {pilot.email}
          </td>
          <td
            scope="row"
            className="py-4 px-6 font-medium whitespace-nowrap text-white"
          >
            <PilotTime validUntil= {pilot.validUntil} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default PilotTableBody;
