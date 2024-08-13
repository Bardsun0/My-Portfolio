import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navItems: [
    { name: "Home", id: "header" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ],
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {},
});

export default navbarSlice.reducer;
