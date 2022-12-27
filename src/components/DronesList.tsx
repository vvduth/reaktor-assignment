import React, { useEffect } from "react";
import DroneTableRow from "./DroneTableRow";
import TableHead from "./TableHead";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getDisplayDrones } from "../store/dronesSlice";

const unecessField = ["mac", "ipv4", "ipv6", "firmware", "altitude"];
const formatableField = ["positionX", "positionY"];
const DronesList = () => {

  const dispatch = useAppDispatch();
  const drones = useAppSelector((state) => state.drones.drones);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getDisplayDrones());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(drones)
  }, [dispatch, drones]);

  // useEffect(() => {
  //   dispatch(getDisplayDrones());
  // }, [dispatch]);

  return (
    <div>
      {drones ? (
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TableHead />
            <tbody>
              {drones.children.map((drone: any) => (
                <DroneTableRow
                  key={Math.floor(Math.random() * 10000)}
                  drone={drone}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading, currently there is no data yet</p>
      )}
    </div>
  );
};

export default DronesList;
