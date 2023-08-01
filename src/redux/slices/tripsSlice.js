import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trips: [],
};

export const getAllTrips = createAsyncThunk(
  "trips/getAllTrips",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://binary-travel-app.xyz/api/v1/trips");
    dispatch(setTrips(res.data));
  }
);

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
  },
  extraReducers: {
    [getAllTrips.pending]: () => console.log("pending"),
    [getAllTrips.rejected]: () => console.log("rejected"),
    [getAllTrips.fulfilled]: () => console.log("fulfilled"),
  },
});

export const { setTrips } = tripsSlice.actions;

export default tripsSlice.reducer;
