import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(state, "state log ");
    },
  },
});

export const { addUser } = testSlice.actions;

export default testSlice.reducer;
