import axios from "axios";

export const DRONE_URL = 'http://assignments.reaktor.com/birdnest/drones' ;

export const fetchData = async (url : string) => {
   try {
    const res = await fetch(url, {
        method: 'GET' ,
    })
    console.log(res.status) ; 
   } catch(e) {
    console.log(e)
   }
}

