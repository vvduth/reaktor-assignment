import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socketURL = "http://localhost:5000/";

const initialState: any = {
  socket: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setUpSocket: (state, action ) => {
        //const socket = io(socketURL);
        return {
            ...state , 
            socket: action.payload , 
        }
    }
  },
  extraReducers(builder) {},
});


export const  {setUpSocket} = socketSlice.actions;
export default socketSlice.reducer;
