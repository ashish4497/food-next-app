import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Create an async thunk for the login request
export const loginUserAuth = createAsyncThunk(
  "auth/loginUserAuth",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// create slice
const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserAuth.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUserAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
    });
    builder.addCase(loginUserAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "An error Occured ";
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
