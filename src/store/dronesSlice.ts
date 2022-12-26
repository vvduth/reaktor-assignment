import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../service";
import { DRONE_URL } from "../service";

const initialState: any = {
  drones: null,
};

export const getDisplayDrones = createAsyncThunk(
  "drones/getDrones",
  async () => {
    try {
      let res = await fetchData(DRONE_URL);
      //setCurrentDronesShown(res.children[1]);
      return res.children[1];
    } catch (e: any) {
      return e.response.data;
    }
  }
);

const dronesSlice = createSlice({
  name: "drones",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getDisplayDrones.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.drones = action.payload;
      }
    );
  },
});

export const {  } = dronesSlice.actions;
export default dronesSlice.reducer;