import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="w-full h-20"
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
              className="h-[80px] w-[140px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
          <div className="flex items-center space-x-8 font-medium">
            {["Home", "Skills", "Works", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-primary hover:text-accent transition duration-300"
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
