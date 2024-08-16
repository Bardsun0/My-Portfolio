import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/slicers/themeSlice";

const Navbar = () => {
  const navItems = useSelector((state) => state.navbar.navItems);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="w-full h-20 fixed top-0 z-50 bg-white font-playfair dark:bg-primary"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="h-[60px] w-[200px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
          <div className="flex items-center space-x-8 font-medium">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-primary hover:text-accent transition duration-300 dark:text-white dark:hover:text-accent"
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => dispatch(toggleDarkMode())}
              className="text-primary dark:text-white hover:text-accent transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? "🌞" : "🌙"}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
