import { useEffect, useState } from "react";
import DronesList from "./components/DronesList";
import ContextProvider from "./context/ContextProvider";
import { fetchData, DRONE_URL } from "./service";

function App() {
  

  return (
    <ContextProvider>
      <DronesList />
    </ContextProvider>
  );
}

export default App;
