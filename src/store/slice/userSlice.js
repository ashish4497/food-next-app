import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  user: [],
  loading: false,
  error: null,
};

export const getUserDetail = createAsyncThunk(
  "user/getUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/getUser",
        payload
      );
      return response.json();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducres: {
    extraReducres: (builder) => {
      builder.addCase(getUserDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(getUserDetail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      });
      builder.addCase(getUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error Occured";
      });
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
