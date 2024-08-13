import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  callToAction: "Let's create something great together!",
  socialLinks: [
    {
      name: "LinkedIn",
      icon: "/LinkedIn.png",
      url: "https://www.linkedin.com/in/ozan-g%C3%BCne%C5%9F-500097312/",
    },
    { name: "GitHub", icon: "/github.png", url: "https://github.com/Bardsun0" },
  ],
  navItems: [
    { name: "Home", id: "header" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ],
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export default footerSlice.reducer;
