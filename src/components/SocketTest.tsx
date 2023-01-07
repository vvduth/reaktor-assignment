import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUpSocket } from "../store/socketSlice";
import { reloadPilots } from "../store/pilotsSlice";

const socketURL = "http://localhost:5000/";

const SocketTest = () => {
  const [list, setList] = useState<any>();
  const [closestDistance, setClosetDisance] = useState<any>() ;

  const dispatch = useAppDispatch();
  const socket = useAppSelector((state) => state.socket.socket);
  const drones = useAppSelector((state) => state.drones.drones);
  useEffect(() => {
    const socket1 = io(socketURL);
    dispatch(setUpSocket(socket1));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("We are conencted to the server ", socket.id);
      });

      socket.on("sayhi", (mess:any) => {
        setList(mess);
        dispatch(reloadPilots(mess))

      });


      socket.on("closetDistance", (distance: any ) => {
        //console.log(distance)
        setClosetDisance(distance)
      })

      
    }
  }, [socket]);

  return (
    <>
      {(  closestDistance ) ? (
        <div className="text-white">Closest distance recorded {closestDistance.toFixed(2)}</div>
      ) : (
        <p className="text-white">fethcing bra</p>
      )}
    </>
  );
};

export default SocketTest;
