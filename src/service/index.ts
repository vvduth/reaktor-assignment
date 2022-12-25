import axios from "axios";
import XMLParser from 'react-xml-parser';

export const DRONE_URL = "http://assignments.reaktor.com/birdnest/drones";

export const fetchData = async (url: string) => {
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
    let xml = new XMLParser().parseFromString(res.data)
    return xml ;
  } catch (e) {
    console.log(e);
  }
};
