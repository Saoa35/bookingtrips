import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (fullName, email, password) => {
    return await axios.post(
      "https://binary-travel-app.xyz/api/v1/auth/sign-up",
      { fullName, email, password }
    );
  }
);

const initialState = {
  fullName: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: {},
});

export const { setFullName, setEmail, setPassword } = userSlice.actions;
export default userSlice.reducer;
