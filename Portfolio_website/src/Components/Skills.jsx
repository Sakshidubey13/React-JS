import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 70 }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-8 py-20 text-white">
      
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">

        {skills.map((skill, index) => (

          <div key={index}>

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"
              />

            </div>

          </div>

        ))}

      </div>
    </section>
  );
};

export default Skills;