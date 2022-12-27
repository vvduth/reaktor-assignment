import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const TableHead = () => {
  const dispatch = useAppDispatch();
  const drones = useAppSelector((state) => state.drones.drones);

  //res.children[1].attributes.snapshotTimestamp
  return (
    <>
      {drones ? (
        <p className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {" "}
          {new Date(drones.children[1].attributes.snapshotTimestamp).toString()}
        </p>
      ) : (
        <></>
      )}
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Serial Number{" "}
          </th>
          <th scope="col" className="py-3 px-6">
            Model{" "}
          </th>
          <th scope="col" className="py-3 px-6">
            Manufacturer
          </th>
          <th scope="col" className="py-3 px-6">
            Position Y
          </th>
          <th scope="col" className="py-3 px-6">
            Position X
          </th>
          <th scope="col" className="py-3 px-6">
            Violation tracking
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
