import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024",
    title: "Started Web Development",
    desc: "Learned HTML, CSS and JavaScript."
  },
  {
    year: "2025",
    title: "React Developer",
    desc: "Built modern web apps using React."
  },
  {
    year: "2026",
    title: "MERN Stack Developer",
    desc: "Working on full stack applications."
  }
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen px-8 py-20 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Education</span>
      </h2>

      <div className="max-w-3xl mx-auto border-l-2 border-orange-500 pl-8 space-y-10">

        {experiences.map((exp, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-xl font-semibold">
              {exp.title}
            </h3>

            <span className="text-orange-500">
              {exp.year}
            </span>

            <p className="text-gray-300 mt-2">
              {exp.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Education;