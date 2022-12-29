import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { filterExpriedPilots } from "../store/pilotsSlice";
const PilotTime = ({ validUntil }: any) => {
  const dispatch = useAppDispatch();
  const drones = useAppSelector((state) => state.drones.drones);
  const [timeLeft, setTimeLeft] = useState<any>(Date.now());
  useEffect(() => {
    setTimeLeft(validUntil - Date.now());
  }, [drones]);
  return <>{new Date(validUntil).toLocaleTimeString()} countdown {(validUntil - Date.now())/1000} secs</>;
};

export default PilotTime;
