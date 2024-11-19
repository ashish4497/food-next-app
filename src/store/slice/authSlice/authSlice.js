import { getUserDetail, loginUserAuth, updateUser } from "./authActionSlice";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  users: [],
};

// create slice
const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    //Login User
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
    //get Users List
    builder.addCase(getUserDetail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      console.log(action.payload, "action.payload");
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUserDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "An error Occured";
    });
    //Update User
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
