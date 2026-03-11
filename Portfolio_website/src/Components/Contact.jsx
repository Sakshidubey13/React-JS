import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-8 py-20 text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        Contact <span className="text-orange-500">Me</span>
      </h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto space-y-6"
      >

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white/10 border border-white/20"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white/10 border border-white/20"
        />

        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-3 rounded bg-white/10 border border-white/20"
        />

        <button className="px-6 py-3 bg-orange-500 rounded-lg">
          Send Message
        </button>

      </motion.form>

    </section>
  );
};

export default Contact;