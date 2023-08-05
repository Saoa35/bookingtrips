import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "",
  token: "",
  loading: false,
  status: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body) => {
    try {
      const { data } = await axios.post(
        "https://binary-travel-app.xyz/api/v1/auth/sign-up",

        body
      );

      if (data.token) {
        window.localStorage.setItem("token", data.token);
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async (body) => {
  try {
    const { data } = await axios.post(
      "https://binary-travel-app.xyz/api/v1/auth/sign-in",

      body
    );

    if (data.token) {
      window.localStorage.setItem("token", data.token);
    }

    return data;
  } catch (error) {
    console.log(error);
  }
});

// export const getUser = createAsyncThunk("user/getUser", async () => {
//   try {
//     const { data } = await axios.get(
//       "https://binary-travel-app.xyz/api/v1/auth/authenticated-user"
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.status = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.status = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = "OK";
      state.user = action.payload.user.fullName;
      state.token = action.payload.token;
    },
    [registerUser.rejected]: (state) => {
      console.log("rejected");
      state.loading = false;
    },

    [loginUser.pending]: (state) => {
      state.loading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = "OK";
      state.user = action.payload.user.fullName;
      state.token = action.payload?.token;
    },
    [loginUser.rejected]: (state) => {
      console.log("rejected");
      state.loading = false;
    },

    // [getUser.pending]: (state) => {
    //   state.loading = true;
    //   state.status = null;
    // },
    // [getUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.status = null;
    //   state.user = action.payload?.user;
    //   state.token = action.payload?.token;
    // },
    // [getUser.rejected]: (state) => {
    //   console.log("rejected");
    //   state.loading = false;
    // },
  },
});

export const { logOut } = userSlice.actions;

export const checkAuth = (state) => Boolean(state.user.token);

export default userSlice.reducer;
