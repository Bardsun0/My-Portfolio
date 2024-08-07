import { motion } from "framer-motion";

const skillsData = [
  {
    name: "JavaScript",
    logo: "/js-logo.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML",
    logo: "/html-logo.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    logo: "/css-logo.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    logo: "/tailwind-logo.png",
    url: "https://tailwindcss.com/",
  },
  { name: "React", logo: "/react-logo.png", url: "https://reactjs.org/" },
  { name: "Redux", logo: "/redux-logo.png", url: "https://redux.js.org/" },
  { name: "Figma", logo: "/figma-logo.png", url: "https://www.figma.com/" },
  { name: "Node.js", logo: "/nodejs-logo.png", url: "https://nodejs.org/" },
];

const Skills = () => {
  return (
    <section className="w-full py-20 font-playfair">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-primary">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skillsData.map((skill, index) => (
            <motion.a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <span className="text-xl font-semibold text-primary">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
