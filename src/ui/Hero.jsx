import { motion } from "framer-motion";
import bgImage from "../assets/bg-image.png";
import laptop from "../assets/laptopBg.png";
import wire from "../assets/wireFrame.png";
import phone from "../assets/phone.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-[800px] w-full"
      style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="pt-22 md:pt-44 flex flex-col md:flex-row w-[90%] m-auto justify-between items-center md:h-[500px]">
        {/* Animated Text Section */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-[40%]">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            TRANSFORMING IDEAS <br />
            <span className="relative inline top-[-15px] md:top-[-50px]">
              INTO
            </span>
            <span className="text-6xl md:text-9xl font-bold inline bg-[linear-gradient(180deg,_#47FB09_9.14%,_rgba(158,47,191,0.31)_84.62%)] bg-clip-text text-transparent ">
              REALITY
            </span>
          </h1>
          <p className="md:text-2xl font-normal md:font-semibold text-white pt-3">
            Turning innovative concept into functional applications that enhance
            user experiences and drive business growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="!bg-[#FF16E0] px-2 py-4 md:py-6 md:px-3 md:text-2xl font-semibold w-[200px] md:w-[300px] rounded-3xl cursor-pointer hover:!bg-pink-500 text-white !mt-6">
            Learn more
          </motion.button>
        </motion.article>

        {/* Animated Images Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative mt-22 md:mt-48">
          <motion.img
            src={laptop}
            alt="laptop"
            className="relative"
            initial={{ y: 50, scale: 0.8 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.img
            src={wire}
            alt="wire"
            className="absolute top-[-50px] right-10 md:right-[100px] md:top-[-50px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <motion.img
            src={phone}
            alt="phone"
            className="absolute top-[-80px] right-[150px] md:right-[380px] md:top-[100px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
