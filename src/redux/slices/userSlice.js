import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const signUp = createAsyncThunk(
//   "user/signUp",
//   async (userData, { rejectWithValue }) => {
//     await axios.post("https://binary-travel-app.xyz/api/v1/auth/sign-up");
//   }
// );

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
});

export const { setFullName, setEmail, setPassword } = userSlice.actions;
export default userSlice.reducer;
