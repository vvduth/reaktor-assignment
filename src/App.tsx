import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { fetchData, DRONE_URL } from "./service";

function App() {
  
  const [demo, setDemo ] = useState() ; 
  useEffect(() => {
    const interval = setInterval(()=> {
      fetchDrones()
    }, 2000)
    return () => clearInterval(interval) ; 
  }, []);

  const fetchDrones = async () => {
    let res = await fetchData(DRONE_URL)
    console.log(res.children)
    setDemo(res.children)
  }
  
  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
