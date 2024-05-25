import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (registrationData, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", registrationData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// email: "valera2024@ukr.net";
// name: "Valera";
// password: "valera123456";
// email: "sergiy2000@ukr.net";
// name: "sergiy2323";
// password: "sergiy12345";
export const authorizationUser = createAsyncThunk(
  "auth/authorizationUser",
  async (authorizationData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", authorizationData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  "ayth/logOutUser",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader("");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCurrentInfoOfUser = createAsyncThunk(
  "auth/getCurrentInfoOfUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(
        "Unable to get current information of user"
      );
    }
    setAuthHeader(persistedToken);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
