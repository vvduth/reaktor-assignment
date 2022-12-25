import React, { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const DronesList = () => {
  const { currentDronesShown, fetchDrones } = useStateContext() as any;
  useEffect(() => {
    console.log("hey " + currentDronesShown);
  }, [currentDronesShown]);

  return (
    <div>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {currentDronesShown ? (
        <>
          <table>
            <tr>
              <th>Serial Number </th>
              <th>Model </th>
              <th>Manufacturer</th>
              <th>Mac</th>
              <th>Ipv4</th>
              <th>Tpv6</th>
              <th>Firmware</th>
              <th>Position Y</th>
              <th>Position X</th>
              <th>Altitude</th>
            </tr>

            {currentDronesShown.children.map((drone: any) => (
              <tr key={Math.floor(Math.random() * 10000)}>
                {drone.children.map((droneInfo: any) => (
                  <td key={droneInfo.name + droneInfo.value}>
                    {droneInfo.value}
                  </td>
                ))}
              </tr>
            ))}
          </table>
        </>
      ) : (
        <p>Loading, currently there is no data yet</p>
      )}
    </div>
  );
};

export default DronesList;
