import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
