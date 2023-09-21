import { CounterState } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrementValue: (state, action: PayloadAction<null>) => {
      return { ...state, value: state.value - 1 };
    },
    incrementValue: (state, action: PayloadAction<null>) => {
      return { ...state, value: state.value + 1 };
    },
  },
});

export const { decrementValue, incrementValue } = counterSlice.actions;
export default counterSlice.reducer;
