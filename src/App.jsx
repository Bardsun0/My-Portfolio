import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleDarkMode } from "./store/slicers/themeSlice";
import Home from "./pages/Home";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      dispatch(toggleDarkMode());
    }
  }, [dispatch]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return <Home />;
}

export default App;
