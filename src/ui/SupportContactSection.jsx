import { motion } from "framer-motion";
import contactImg from "../assets/contact.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const SupportContactSection = () => {
  return (
    <section className="relative bg-[#D2E3FA] py-16 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-7 md:gap-11 md:items-stretch overflow-hidden rounded-lg shadow-xl">
        {/* Left Column: Form Content */}
        <motion.div
          variants={fadeUp}
          className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center rounded-lg md:rounded-r-none z-10 bg-white bg-opacity-80">
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
            Your ideas deserve the best support
          </motion.h2>

          <motion.form className="space-y-6" variants={fadeUp} custom={1}>
            <motion.div variants={fadeUp} custom={1.1}>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Example"
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={1.2}>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. xxxxxx@gmail.com"
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={1.3}>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your comments..."
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={fadeUp}
              custom={1.4}
              className="w-full !bg-[#FF16E0] rounded-3xl text-white font-bold py-3 px-6 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              Submit
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Column: Image with subtle zoom animation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
          className="relative w-full md:w-1/2 bg-[#D2E3FA] min-h-[300px] md:min-h-[auto] rounded-lg md:rounded-l-none flex items-center justify-center"
          style={{
            backgroundImage: `url('${contactImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>
    </section>
  );
};

export default SupportContactSection;
