import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import { fetchPilot } from "../service";

const PilotTableBody = ({ pilots }: any) => {
  console.log(pilots);
  return (
    <>
      {pilots.map((pilot: any) => (
        <>
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white font-bold"
            key={pilot.pilotId}
          >
            <td
              scope="row"
              className="py-4 px-6 font-medium whitespace-nowrap text-white"
              
            >
                {pilot.droneNum}
            </td>
            <td
              scope="row"
              className="py-4 px-6 font-medium whitespace-nowrap text-white"
              
            >
                {pilot.pilotId}
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
          </tr>
        </>
      ))}
    </>
  );
};

export default PilotTableBody;
