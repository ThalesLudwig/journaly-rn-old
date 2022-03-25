import { createSlice } from "@reduxjs/toolkit";

const THEMES = {
  DARK: 0,
  LIGHT: 1,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState: { value: THEMES.LIGHT },
  reducers: {
    darkMode(state) {
      state.value = THEMES.DARK;
    },
    lightMode(state) {
      state.value = THEMES.LIGHT;
    },
  },
});

export const { darkMode, lightMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;