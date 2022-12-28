import { fetchPilot } from './../service/index';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DRONE_URL } from "../service";
import { violateCheckPilot } from "../utils/violateCheck";
import { type } from 'os';

interface IPilot {
    pilotId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    createdDt: string
    email: string
}

export interface IPilotPersist  {
    info: IPilot | any | null ,
    expire: any | number |Date
}

export const getViolatedPilots = createAsyncThunk("pilots/getViolatedPilots", async (k:any) => {
    try {
        let res = await fetchPilot(k) ;
        return {...res, expire: 10000} ; 
    } catch(e: any) {
        return e.respose.data ; 
    }
})

type IPilotState = IPilotPersist[] | any  | null ; 

const initialState = {
    pilots: [] as IPilotState
}

function push1(array:any[], item:any) {
    if (!array.find(({pilotId}) => pilotId === item.pilotId)) {
      array.push(item);
    }
  }

const pilotsSlice = createSlice({
    name: "pilots", 
    initialState ,
    reducers : {
        
    },
    extraReducers(builder) {
        builder.addCase(
            getViolatedPilots.fulfilled, 
            (state,action: PayloadAction<IPilotPersist>) => {
                push1(state.pilots,action.payload)
                //console.log(action.payload)
            }
        )
    },
})

export const {  } = pilotsSlice.actions;
export default pilotsSlice.reducer;