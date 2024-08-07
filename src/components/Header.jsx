import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <header
      id="header"
      className="w-full font-inter text-shadow-custom forStyle overflow-hidden pt-20"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative"
        style={{ y }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-[36px] font-medium mb-10 text-primary">
              Hi! 👋 <br /> I'm Ozan. I'm a frontend developer. I can craft
              solid and scalable frontend products. <br /> Let's meet!
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/ozan-g%C3%BCne%C5%9F-500097312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/LinkedIn.png"
                  alt="LinkedIn"
                  className="w-[31px] h-[33.95px]"
                />
              </a>
              <a
                href="https://github.com/Bardsun0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="w-[34px] h-[36.14px]"
                />
              </a>
            </div>
            <div className="text-xl leading-relaxed mt-4 font-normal text-primary">
              <p>
                Currently{" "}
                <span className="text-custom-darkpink">Freelancing</span> for{" "}
                <span className="text-custom-darkpink">
                  UX, UI, & Web Design{" "}
                </span>
                Project .
              </p>
              <p>
                Invite me to join your team →{" "}
                <a
                  href="mailto:ozangunes2894@gmail.com"
                  className="text-custom-darkpink underline"
                >
                  ozangunes2894@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <img
              src="/profilephoto.png"
              alt="ProfilePhoto"
              className="w-3/4 h-auto object-cover rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
