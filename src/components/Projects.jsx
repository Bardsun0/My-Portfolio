import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <section id="projects" className="w-full py-20 font-playfair">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-primary">
          Check out my Recent Projects 🎉
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-12">
          <motion.a
            href="https://github.com/Bardsun0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-3 rounded-full font-medium flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/github.png" alt="GitHub" className="w-5 h-5 mr-2" />
            View on GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ozan-g%C3%BCne%C5%9F-500097312/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-white text-accent border border-accent px-6 py-3 rounded-full font-medium flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/LinkedIn.png" alt="LinkedIn" className="w-5 h-5 mr-2" />
            View on LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
