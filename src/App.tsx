import { useEffect, useState } from "react";
import DronesList from "./components/DronesList";
import Infotext from "./components/Infotext";
import Pilots from "./components/Pilots";
import ContextProvider from "./context/ContextProvider";
import { fetchData, DRONE_URL } from "./service";

function App() {
  return (
    <ContextProvider>
      <div className="grid gap-2 grid-cols-2 grid-rows-2">
        <div>
          <Infotext message={"Drone position, auto update every 2 secs"} />
          <DronesList />
        </div>
        <div>
          <Infotext message={"Information of those pilots who drove violated drones"}/>
          <Pilots />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
