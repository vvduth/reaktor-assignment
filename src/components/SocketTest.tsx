import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUpSocket } from "../store/socketSlice";
import { reloadPilots } from "../store/pilotsSlice";

const socketURL = "http://localhost:5000/";

const SocketTest = () => {
  const [list, setList] = useState<any>();

  const dispatch = useAppDispatch();
  const socket = useAppSelector((state) => state.socket.socket);
  useEffect(() => {
    const socket1 = io(socketURL);
    // socket.on("connect", () => {
    //   console.log("We are conencted to the server ", socket.id);
    // });

    // socket.on("sayhi", (mess) => {
    //   console.log(mess);
    //   setList(mess);
    // });
    dispatch(setUpSocket(socket1));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("We are conencted to the server ", socket.id);
      });

      socket.on("sayhi", (mess:any) => {
        console.log(mess);
        setList(mess);
        dispatch(reloadPilots(mess))

      });
    }
  }, [socket]);

  useEffect(() => {
     console.log("list has changed");
   }, [list]);
  return (
    <>
      {list ? (
        <div className="text-white">socket area</div>
      ) : (
        <p className="text-white">fethcing bra</p>
      )}
    </>
  );
};

export default SocketTest;
