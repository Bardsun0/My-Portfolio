import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  return savedDarkMode ? JSON.parse(savedDarkMode) : false;
};

const initialState = {
  darkMode: getInitialDarkMode(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
