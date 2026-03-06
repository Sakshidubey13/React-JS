import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

//  ligth mode
  const lightColors = {
  navBg: "bg-gradient-to-br from-orange-200 to-white",
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
  textActive: "text-orange-500",
};

//darkmode
const darkColors = {
  navBg: "bg-gradient-to-br from-gray-700 to-black",
  textPrimary: "text-white",
  textSecondary: "text-gray-300",
  textActive: "text-orange-400",
};
  const colors = darkMode ? darkColors : lightColors;

  const handleNewClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`} >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Navigation Items */}
          <div className="hidden lg:flex  items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNewClick(item.name)}
                className="relative">
               <motion.span
               className={`font-medium transition-colors duration-300
               ${
                activeSection === item.name.toLowerCase()
                ? colors.textActive
                :`${colors.textSecondary} hover:text-orange-500`}`}
               whileHover={{scale:1.05}}
               whileTap={{scale:0.95}}>
                {item.name}
               </motion.span>

               {activeSection === item.name.toLowerCase()&&(
                <motion.div
                layoutId="navbar-indicator"
                className={`absolute -bottom-1 left-0
                    rigth-0 h-0.5 bg-linear-to-r rounded-full 
                    ${colors.indicator}`}>
              </motion.div>
               )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2 ">
            {/* dark mode toogle 14:34*/}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
