import { createSlice } from "@reduxjs/toolkit";
import { IEntry } from "../interfaces/IEntry";

type EntryState = {
  value: IEntry[];
};

const initialState: EntryState = { value: [] };

const EntrySlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    addEntry(state, { payload }) {
      const entries: IEntry[] = [...state.value, payload];
      state.value = entries;
    },
    removeEntry(state, { payload }) {
      const entries = [...state.value];
      entries.splice(payload, 1);
      state.value = entries;
    },
    updateEntry(state, { payload }) {
      const entries = [...state.value];
      const index = entries.findIndex((entry) => entry.id === payload.id);
      console.log('index', index)
      if (index >= 0) entries[index] = payload;
      state.value = entries;
    },
  },
});

export const { addEntry, removeEntry, updateEntry } = EntrySlice.actions;

export default EntrySlice.reducer;
