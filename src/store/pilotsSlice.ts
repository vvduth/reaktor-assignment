import { fetchPilot } from "./../service/index";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DRONE_URL } from "../service";
import { violateCheckPilot } from "../utils/violateCheck";
import { type } from "os";

interface IPilot {
  pilotId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdDt: string;
  email: string;
  expire?: any;
  validUntil?: any;
}
const arraysFilter = (arr1:any , arr2: any) => {
  let res = [];
  res = arr1.filter((el:any) => {
     return !arr2.find((element:any) => {
        return element.serialId === el.serialId;
     });
  });
  return res;
}
export interface IPilotPersist {
  info: IPilot | any | null;
  expire: any | number | Date;
}

export const getViolatedPilots = createAsyncThunk(
  "pilots/getViolatedPilots",
  async (k: any) => {
    try {
      let res = await fetchPilot(k);
      //
      return { ...res, expire: 10000, validUntil: Date.now() + 20000 };
    } catch (e: any) {
      return e.respose.data;
    }
  }
);

export const getFullPilotInfoFromSerialNumber = createAsyncThunk(
  "pilots/getFullPilotInfo",
  async ( _k,{ getState }: any) => {
    try {

      const state: any = getState();
      let payload = [] ; 
      const pilotDroneSerialNumber = state.pilots.pilots;
      const fullInfoPilotArray = state.pilots.fullPilotsInfo ;
      const filteredArr = arraysFilter(pilotDroneSerialNumber, fullInfoPilotArray) ;
      console.log("filtered arr: " + filteredArr);

      for(let element of filteredArr) {
        let res = await fetchPilot(element.serialId) ; 
        //payload.push({...res, seria})
      }
      return "hey"
    } catch (e: any) {
      return e.respose.data;
    }
  }
);

type IPilotState = IPilotPersist[] | any | null | any[];

const initialState = {
  pilots: [] as IPilotState,
  fullPilotsInfo: [] as IPilotState,
};

function push1(array: any[], item: any) {
  if (!array.find(({ pilotId }) => pilotId === item.pilotId)) {
    array.push(item);
  }
}

const pilotsSlice = createSlice({
  name: "pilots",
  initialState,
  reducers: {
    filterExpriedPilots: (state) => {
      return {
        ...state,
        pilots: state.pilots.filter(
          (pilot: any) => pilot.validUntil - Date.now() > 0
        ),
      };
    },
    reloadPilots: (state, action) => {
      return {
        ...state,
        pilots: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getViolatedPilots.fulfilled,
      (state, action: PayloadAction<IPilotPersist>) => {
        push1(state.pilots, action.payload);
        //console.log(action.payload)
      }
    );
    builder.addCase(
      getFullPilotInfoFromSerialNumber.fulfilled, 
      (state, action: PayloadAction<IPilotPersist>) => {
        console.log(action.payload)
      }
    )
  },
});

export const { filterExpriedPilots, reloadPilots } = pilotsSlice.actions;
export default pilotsSlice.reducer;
