import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import SocialIcons from "./SocialIcons";
import Confetti from "./Confetti";

const Footer = () => {
  const [isExploding, setIsExploding] = useState(false);
  const controls = useAnimation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConfetti = async () => {
    setIsExploding(true);
    await controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.3 },
    });
    setTimeout(() => setIsExploding(false), 1500);
  };

  return (
    <footer id="contact" className="w-full font-playfair text-white">
      <motion.div
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl h-36 mx-auto bg-accent -mt-16 flex flex-col justify-center items-center">
          <motion.h2
            className="text-2xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let`s create something great together!
          </motion.h2>
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full w-64 text-primary"
            />
            <motion.button
              className="bg-white text-accent px-6 py-2 rounded-r-full font-medium hover:bg-gray-300 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={controls}
              onClick={handleConfetti}
            >
              Be my friend
            </motion.button>
            <Confetti isExploding={isExploding} />
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="h-[60px] w-[200px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
          <motion.nav
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { name: "Home", id: "header" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-accent transition duration-300"
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.nav>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SocialIcons />
          </motion.div>
        </div>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-center text-gray-400 text-sm ml-20">
            Copyright ©2024.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
