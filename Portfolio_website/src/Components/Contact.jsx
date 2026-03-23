import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const socialIcons = [
    { icon: <FaGithub />, link: "https://github.com/Sakshidubey13" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sakshi-dubey-7034bb381/",
    },
    { icon: <FaTwitter />, link: "https://x.com/SakshiDubey1304" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/u/Sakshiiidubey/" },
  ];

  return (
    <section id="contact" className="min-h-screen px-8 py-20 text-white">
      {/* Heading */}

      <h2 className="text-4xl font-bold text-center mb-16">
        Get In <span className="text-blue-400">Touch</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

          <p className="text-gray-400 mb-8">
            Passionate about building modern web applications and solving
            real-world problems. Let’s connect and discuss your next project.
          </p>

          {/* Location */}

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/20 p-3 rounded-full">
              <FaMapMarkerAlt className="text-blue-400" />
            </div>

            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-400">India</p>
            </div>
          </div>

          {/* Email */}

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500/20 p-3 rounded-full">
              <FaEnvelope className="text-blue-400" />
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400">sakshiiidubey1393@gmail.com</p>
            </div>
          </div>

          {/* Phone */}

          <div className="flex items-center gap-4 mb-10">
            <div className="bg-blue-500/20 p-3 rounded-full">
              <FaPhone className="text-blue-400" />
            </div>

            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-400">+91 78745 91165</p>
            </div>
          </div>

          {/* Social Icons */}

          <h4 className="mb-3 font-semibold">Follow Me</h4>

          <div className="flex gap-4 text-xl">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Send Me a Message</h3>

          {/* Name + Email */}

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            />
          </div>

          {/* Subject */}

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          {/* Message */}

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          ></textarea>

          {/* Button */}

          <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
