import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  authorizationUser,
  logOutUser,
  getCurrentInfoOfUser,
} from "./operationsAuth";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    loading: false,
    error: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(authorizationUser.pending, handlePending)
      .addCase(authorizationUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authorizationUser.rejected, handleRejected)
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(getCurrentInfoOfUser.pending, (state) => {
        state.loading = true;
        state.isRefreshing = true;
      })
      .addCase(getCurrentInfoOfUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentInfoOfUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRefreshing = false;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

const authReducer = slice.reducer;
export default authReducer;
