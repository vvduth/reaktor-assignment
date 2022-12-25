import React from 'react'
import { useStateContext } from '../context/ContextProvider';

const DroneInfo = () => {
    const { currentDronesShown, fetchDrones,  } = useStateContext() as any;
  return (
    <div>DroneInfo</div>
  )
}

export default DroneInfo