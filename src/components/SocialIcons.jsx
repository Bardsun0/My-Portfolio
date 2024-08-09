import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "/LinkedIn.png",
    url: "https://www.linkedin.com/in/ozan-g%C3%BCne%C5%9F-500097312/",
    width: "31px",
    height: "33.95px",
  },
  {
    name: "GitHub",
    icon: "/github.png",
    url: "https://github.com/Bardsun0",
    width: "34px",
    height: "36.14px",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.img
            src={link.icon}
            alt={link.name}
            style={{ width: link.width, height: link.height }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
