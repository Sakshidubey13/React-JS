
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiExpress,
  SiPython,
  SiMysql,
  SiRedux,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "C", icon: <SiC className="text-blue-400 text-4xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500 text-4xl" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400 text-4xl" /> },

  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },

  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },

  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },

  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },

  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },


  { name: "SQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },

  { name: "DBMS", icon: <FaDatabase className="text-purple-400 text-4xl" /> },
{ name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-8 py-24 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-orange-500/30"
          >

            {/* glow effect */}

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition"></div>

            {/* icon */}

            <div className="mb-4">
              {skill.icon}
            </div>

            {/* name */}

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Skills;