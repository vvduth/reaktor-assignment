import axios from "axios";
import XMLParser from 'react-xml-parser';

export const DRONE_URL = "http://assignments.reaktor.com/birdnest/drones";
export const PILOT_URL = "http://assignments.reaktor.com/birdnest/pilots/:"

export const fetchData = async (url: string) => {
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
    let xml = new XMLParser().parseFromString(res.data)
    //console.log(xml.children[1].attributes.snapshotTimestamp)
    return xml ;
  } catch (e) {
    console.log(e);
  }
};

export const fetchPilot = async (serialID:any) => {
   try {
      const res = await axios.get(`http://assignments.reaktor.com/birdnest/pilots/` + serialID) ;
      return res.data ; 
   } catch(e) {
      console.log(e) ;
   }
}
