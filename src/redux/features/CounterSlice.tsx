import { createSlice } from "@reduxjs/toolkit";

export type TCounter = {
  count: number;
};
const initialState: TCounter = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { decrement, increment, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
