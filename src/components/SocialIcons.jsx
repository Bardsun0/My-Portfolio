import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const SocialIcons = () => {
  const socialLinks = useSelector((state) => state.footer.socialLinks);

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
