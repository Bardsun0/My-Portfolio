import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      title: "E-commerce Platform",
      image: "/project1.png",
      description: "User-friendly online shopping experience",
      url: "",
    },
    {
      title: "Pizza Order Project",
      image: "/project2.png",
      description: "Clean and modern pizza order application design",
      url: "https://bardsun-pizza-challenge.vercel.app/",
    },
    {
      title: "Portfolio Website 2",
      image: "/project3.png",
      description:
        "Another portfolio design, showcasing creative work with style ",
      url: "https://ozangunes.vercel.app/",
    },
    {
      title: "React Grid",
      image: "/project4.png",
      description: "Problem solving with grid",
      url: "",
    },
  ],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
