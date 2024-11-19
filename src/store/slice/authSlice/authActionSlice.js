const { createAsyncThunk } = require("@reduxjs/toolkit");
import axiosInstance from "@/utils/axios";
import axios from "axios";

//register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload, { rejectWithValue }) => {
    console.log(payload, "log payload");

    try {
      const response = await axiosInstance.post("/auth/register", payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// login Request
export const loginUserAuth = createAsyncThunk(
  "auth/loginUserAuth",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//get Users Request
export const getUserDetail = createAsyncThunk(
  "user/getUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/getUser", payload);
      return response.json();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//update user
export const updateUser = createAsyncThunk(
  "user/update",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/updateUser", payload);
      return response.json();
    } catch (error) {
      return rejectWithValue(error?.response || error.message);
    }
  }
);
