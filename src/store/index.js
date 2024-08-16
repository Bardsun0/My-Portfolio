import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slicers/navbarSlice";
import skillsReducer from "./slicers/skillsSlice";
import projectsReducer from "./slicers/projectsSlice";
import footerReducer from "./slicers/footerSlice";
import themeSliceReducer from "./slicers/themeSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    footer: footerReducer,
    theme: themeSliceReducer,
  },
});
