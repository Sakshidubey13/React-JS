import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative #0F182B text-white pt-9 pb-15 border-t border-white/1">

      {/* gradient line */}

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-amber-50 gap-8">

        {/* logo */}

        <div className="text-start md:text-left">

          <h2 className="text-2xl font-bold">
            Sakshi<span className="text-orange-500">.</span>
          </h2>

    
        </div>

    

        {/* social icons */}

        <div className="flex gap-5 text-xl">

          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://instagram.com"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://twitter.com"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <FaTwitter />
          </motion.a>

        </div>

      </div>

      {/* bottom */}
 
      <div className="mt-10 justify-center text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sakshi. All rights reserved.
      </div>

      {/* back to top button */}

      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 p-3 rounded-full shadow-lg transition"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;