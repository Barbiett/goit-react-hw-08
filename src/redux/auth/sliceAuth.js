import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  authorizationUser,
  logOutUser,
  getCurrentInfoOfUser,
} from "./operationsAuth";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    loading: false,
    error: null,
    // errorRegister: null,
    // errorAuthorization: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.errorRegister = action.payload;
      })
      .addCase(authorizationUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.dir(authorizationUser);
      })
      .addCase(authorizationUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(authorizationUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // state.errorAuthorization = action.payload;
      })
      .addCase(logOutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCurrentInfoOfUser.pending, (state) => {
        state.loading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(getCurrentInfoOfUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.error = null;
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
