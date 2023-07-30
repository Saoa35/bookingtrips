import { createSlice } from "@reduxjs/toolkit";

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

export const { setFullName, setEmail } = userSlice.actions;
export default userSlice.reducer;
