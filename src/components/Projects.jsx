import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Mobile App Design",
    image: "/project1.jpg",
    description: "A sleek mobile app interface design",
  },
  {
    title: "Classic Web App",
    image: "/project2.jpg",
    description: "Clean and modern web application design",
  },
  {
    title: "E-commerce Platform",
    image: "/project3.jpg",
    description: "User-friendly online shopping experience",
  },
  {
    title: "Portfolio Website",
    image: "/project4.jpg",
    description: "Showcasing creative work with style",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 font-playfair">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-primary">
          Check out my Recent Projects 🎉
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.button
            className="bg-accent text-white px-6 py-3 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More works
          </motion.button>
          <motion.a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-white text-accent border border-accent px-6 py-3 rounded-full font-medium flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/dribbble-icon.png"
              alt="Dribbble"
              className="w-5 h-5 mr-2"
            />
            View on Dribbble
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
