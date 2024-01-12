import { configureStore } from '@reduxjs/toolkit';
import authenReducer from "../features/authSlice"

export const store = configureStore({
  reducer: {
    auth: authenReducer
  },
});
