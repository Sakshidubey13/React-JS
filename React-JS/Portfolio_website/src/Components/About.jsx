import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 text-white"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative group"
          >
            {/* gradient glow */}

            <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full blur-xl opacity-40"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-white/20 shadow-2xl group-hover:shadow-pink-500/50  animate-pulse"
            />
          </motion.div>
        </motion.div>

        {/* TEXT CARD */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg rounded-2xl"
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hello! I'm <span className="text-orange-400 font-semibold">Sakshi Dubey</span>, 
            a passionate MERN Stack Developer who loves building modern and 
            interactive web applications.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I enjoy turning ideas into reality through code and constantly 
            learning new technologies to improve my development skills.
          </p>

          {/* INFO */}

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">

            <div>
              <span className="text-orange-400 font-semibold">Name:</span> Sakshi Dubey
            </div>

            <div>
              <span className="text-orange-400 font-semibold">Age:</span> 18
            </div>

            <div>
              <span className="text-orange-400 font-semibold">Role:</span> MERN Developer
            </div>

            <div>
              <span className="text-orange-400 font-semibold">Location:</span> India
            </div>

          </div>

          {/* BUTTON */}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 font-semibold shadow-lg"
          >
            Download Resume
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default About;