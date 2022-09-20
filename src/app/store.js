import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "../features/CalculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: CalculatorSlice.reducer,
  },
});
