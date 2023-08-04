import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trips: [],
  trip: {},
  status: null,
  error: null,
};

export const getAllTrips = createAsyncThunk(
  "trips/getAllTrips",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://binary-travel-app.xyz/api/v1/trips");

      if (!res.ok) {
        throw new Error("Server Error!");
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTrip = createAsyncThunk(
  "trips/getTrip",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(
        `https://binary-travel-app.xyz/api/v1/trips/${id}`
      );

      if (!response.ok) {
        throw new Error("Can`t find trip. Server Error!");
      }

      dispatch(findTrip(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    findTrip: (state, action) => {
      state.trip = state.trips.find((el) => el.id === action.payload.id);
    },
  },
  extraReducers: {
    [getAllTrips.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getAllTrips.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getAllTrips.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.trips = action.payload;
    },
  },
});

export const { findTrip } = tripsSlice.actions;

export default tripsSlice.reducer;
