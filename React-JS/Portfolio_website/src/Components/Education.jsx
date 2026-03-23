import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2024",
    title: "10th Standard",
    desc: "Completed 10th A grade and developed interest in computer technology."
  },
  {
    year: "2025 - 2026",
    title: "12th Standard",
    desc: "Completed 12th A grade and started focusing on programming and web development."
  },
  {
    year: "2026 - Present",
    title: "BCA - Vidhyadeep University",
    desc: "Currently pursuing Bachelor of Computer Applications and learning Full Stack Web Development (Frontend & Backend)."
  },
  {
    year: "2026 - Present",
    title: "Full Stack Developer",
    desc: "Learning MERN Stack and building real-time projects using React, Node.js, MongoDB and modern web technologies."
  }
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen px-8 py-20 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Education</span>
      </h2>

      <div className="max-w-3xl mx-auto border-l-2 border-orange-500 pl-8 space-y-10">

        {education.map((edu, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* timeline dot */}

            <div className="absolute -left-[34px] top-2 w-4 h-4 bg-orange-500 rounded-full"></div>

            <h3 className="text-xl font-semibold">
              {edu.title}
            </h3>

            <span className="text-orange-500">
              {edu.year}
            </span>

            <p className="text-gray-300 mt-2">
              {edu.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Education;