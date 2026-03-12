import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";  


const projects = [
  {
    title: "E-commerce Product Webpage",
    desc: "Responsive ecommerce website with product listings and cart system.",
    image: project1,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://fabulous-lolly-44036c.netlify.app/",
    github:
      "https://github.com/Sakshidubey13/JavaScript/tree/main/JavaScript/API(Application%20Program%20Interface)/E-commercee",
  },
  {
    title: "Product Management",
    desc: "CRUD product management system built using JavaScript and Tailwind.",
    image: project2,
    tech: ["JavaScript", "TailwindCSS"],
    live: "https://producttcurd.netlify.app/",
    github:
      "https://github.com/Sakshidubey13/JavaScript/tree/main/JavaScript/Praticle%20Exam",
  },
  {
    title: "TextUtils",
    desc: "React application for text manipulation and analysis.",
    image: project3,
    tech: ["React", "CSS3","localStorage"],
    live: "https://dancing-semifreddo-594bae.netlify.app/",
    github:
      "https://github.com/Sakshidubey13/React-JS/tree/main/TextUtils",
  },
   {
    title: "EMI Calculation",
    desc: "EMI calculator built with JavaScript for financial planning.",
    image: project4,
    tech: ["HTML", "CSS", "JavaScript", ],
    live: "https://emicalculationn.netlify.app/",
    github:
      "https://github.com/Sakshidubey13/JavaScript/tree/main/JavaScript/Sakshi_11071_Webhacks",
  },
  {
    title: "Product Management",
    desc: "CRUD product management system built using JavaScript and Tailwind.",
    image: project2,
    tech: ["JavaScript", "TailwindCSS"],
    live: "https://producttcurd.netlify.app/",
    github:
      "https://github.com/Sakshidubey13/JavaScript/tree/main/JavaScript/Praticle%20Exam",
  },
  {
    title: "TextUtils",
    desc: "React application for text manipulation and analysis.",
    image: project3,
    tech: ["React", "CSS3","localStorage"],
    live: "https://dancing-semifreddo-594bae.netlify.app/",
    github:
      "https://github.com/Sakshidubey13/React-JS/tree/main/TextUtils",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/10 shadow-xl hover:shadow-orange-500/20 transition"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-300 hover:text-white"
                >
                  <Github size={20} />
                  Code
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Projects;