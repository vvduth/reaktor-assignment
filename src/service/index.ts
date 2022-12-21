import axios from "axios";

export const DRONE_URL = 'http://assignments.reaktor.com/birdnest/drones' ;

export const fetchData = async (url : string) => {
   try {
    const res = await axios.get(url)
    console.log(res) ; 
   } catch(e) {
    console.log(e)
   }
}

