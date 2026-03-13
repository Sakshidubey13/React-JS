import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔥 SECTION OBSERVER — AUTO ACTIVE SECTION CHANGE
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6}
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Nav Items
  const navItems = ["home", "about","education", "skills", "projects", "contact"];

  // Light mode colors
  const lightColors = {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    textActive: "text-orange-500",
    indicator: "bg-orange-500",
    button: "from-orange-400 to-orange-600",
  };

  // Dark mode colors
  const darkColors = {
    navBg: "bg-gradient-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textActive: "text-orange-400",
    indicator: "bg-orange-400",
    button: "from-orange-500 to-orange-700",
  };

  const colors = darkMode ? darkColors : lightColors;

  return (
    <div className="flex justify-center w-full fixed z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full ${colors.navBg} backdrop-blur-lg px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full">
          
          {/* logo */}
          <motion.a href="/" whileHover={{ scale: 1.05 }}>
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Sakshi<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className="relative cursor-pointer"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.span>

                {activeSection === item && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${colors.indicator}`}
                  ></motion.div>
                )}
              </Link>
            ))}
          </div>

          {/* right side */}
          <div className="flex items-center space-x-3">

            {/* theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Hire Me button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className={`hidden lg:block px-6 py-2 rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md`}
            >
              Hire Me
            </motion.a>

            {/* mobile menu icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-300 dark:bg-gray-700"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* mobile dropdown */}
        {isMenuOpen && (
          <div
            className={`mt-3 lg:hidden rounded-xl p-4 ${
              darkMode ? "bg-gray-900/95" : "bg-white/95"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 cursor-pointer"
              >
                <span
                  className={`block text-center font-medium ${
                    activeSection === item
                      ? colors.textActive
                      : colors.textSecondary
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </Link>
            ))}
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
//import { motion } from "framer-motion";
//
//const Navbar = () => {
//
//  return (
//
//    <motion.nav
//      initial={{ y: -80 }}
//      animate={{ y: 0 }}
//      className="fixed w-full top-0 backdrop-blur-lg bg-white/5 border-b border-white/10 z-50"
//    >
//
//      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
//
//        <h1 className="text-xl font-bold text-white">
//          Sakshi<span className="text-orange-500">.</span>
//        </h1>
//
//        <ul className="flex gap-8 text-white">
//
//          <li><a href="#home">Home</a></li>
//          <li><a href="#about">About</a></li>
//          <li><a href="#skills">Skills</a></li>
//          <li><a href="#projects">Projects</a></li>
//          <li><a href="#contact">Contact</a></li>
//
//        </ul>
//
//      </div>
//
//    </motion.nav>
//
//  );
//};
//
//export default Navbar;