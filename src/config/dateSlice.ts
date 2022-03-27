import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

type DateState = {
  value: string;
};

const initialState: DateState = { value: moment().format("DD/MM/YYYY") };

const DateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { setDate } = DateSlice.actions;

export default DateSlice.reducer;
