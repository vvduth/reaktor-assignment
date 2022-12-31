import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";
import PilotTime from "./PilotTime";

const PilotTableBody = ({ pilots }: any) => {
  useEffect(() => {
    //console.log(pilots)
    //console.log(Date.now())
  }, []);
  return (
    <tbody  className="overflow-y-scroll" style={{height: "50vh"}}>
      {pilots.map((pilot: any) => (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white font-bold"
          key={pilot.pilotId}
        >
          <td
            scope="row"
            className="py-4 px-6 w-1/4 font-medium whitespace-nowrap text-white"
          >
            {pilot.phoneNumber}
          </td>
          <td
            scope="row"
            className="py-4 px-6 w-1/4 font-medium whitespace-nowrap text-white"
          >
            {pilot.firstName} {pilot.lastName}
          </td>
          <td
            scope="row"
            className="py-4 px-6 w-1/4 font-medium whitespace-nowrap text-white"
          >
            {pilot.email}
          </td>
          <td
            scope="row"
            className="py-4 px-6 w-1/4 font-medium whitespace-nowrap text-white"
          >
            <PilotTime validUntil={pilot.validUntil} />
          </td>
          <td
            scope="row"
            className="py-4 px-6 w-1/4 font-bold whitespace-nowrap text-white"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PilotTableBody;
