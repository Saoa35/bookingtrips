import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import tripsSlice from "../slices/tripsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    trips: tripsSlice,
  },
});
