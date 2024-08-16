import { useSelector } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

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
