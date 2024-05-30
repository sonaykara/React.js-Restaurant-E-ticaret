import { configureStore } from "@reduxjs/toolkit";

import httpsSlice from "./Features/restaurantApi";
import basketSlice from "./Features/basketSlice";
export const store = configureStore({
  reducer: {
    httpsSlice,
    basketSlice,
  },
});
