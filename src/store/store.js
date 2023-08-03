import { configureStore } from "@reduxjs/toolkit";
import { inputSlice } from "@/store/slices/inputSlice";

// Creating our store and combining all slices
export const store = configureStore({
  reducer: {
    [inputSlice.name]: inputSlice.reducer,
  },
  devTools: true,
});
