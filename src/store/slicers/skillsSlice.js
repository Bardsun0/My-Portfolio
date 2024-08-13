import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [
    {
      name: "JavaScript",
      logo: "/js-logo.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML",
      logo: "/html-logo.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      logo: "/css-logo.png",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Tailwind CSS",
      logo: "/tailwind-logo.png",
      url: "https://tailwindcss.com/",
    },
    {
      name: "React",
      logo: "/react-logo.png",
      url: "https://reactjs.org/",
    },
    {
      name: "Redux",
      logo: "/redux-logo.png",
      url: "https://redux.js.org/",
    },
    {
      name: "Figma",
      logo: "/figma-logo.png",
      url: "https://www.figma.com/",
    },
    {
      name: "Node.js",
      logo: "/nodejs-logo.png",
      url: "https://nodejs.org/",
    },
  ],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;
