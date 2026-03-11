import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built with React and Tailwind."
  },
  {
    title: "TextUtils App",
    desc: "React app for text utilities and manipulation."
  },
  {
    title: "Todo App",
    desc: "Task management application with local storage."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-8 py-20 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-xl"
          >

            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.desc}
            </p>

            <button className="px-4 py-2 bg-orange-500 rounded">
              View Project
            </button>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default Projects;