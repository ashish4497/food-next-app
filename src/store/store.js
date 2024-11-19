import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slice/testSlice";
import authSlice from "./slice/authSlice/authSlice";

export const store = configureStore({
  reducer: {
    test: testSlice,
    login: authSlice,
  },
});
