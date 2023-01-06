import { useEffect, useState } from "react";
import DronesList from "./components/DronesList";
import Infotext from "./components/Infotext";
import Pilots from "./components/Pilots";
import ContextProvider from "./context/ContextProvider";
import { fetchData, DRONE_URL } from "./service";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import SocketTest from "./components/SocketTest";
import DisplayLocation from "./components/DisplayLocation";

function App() {
  return (
    <ContextProvider>
      <div className="grid gap-2 grid-cols-2 grid-rows-2">
        <div>
          <Infotext
            message={"Closest distance deteched and position visualization"}
          />
          <SocketTest />
          <DisplayLocation />
        </div>
        <div>
          <Infotext
            message={
              "Information of those pilots who drove violated drones, click on the button to view it"
            }
          />
          <Pilots />
        </div>

        <div>
          <Infotext message={"Drone position, auto update every 2 secs"} />
          <DronesList />
        </div>
      </div>
    </ContextProvider>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
