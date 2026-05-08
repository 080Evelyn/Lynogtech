import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const floatingGlow = {
  animate: {
    y: [0, 20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const fullText = "Building Reliable Digital Products & Systems";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const splitIndex = "Building Reliable Digital".length;
  const firstPart = text.slice(0, splitIndex);
  const secondPart = text.slice(splitIndex);

  return (
    <section className="relative w-full min-h-screen bg-[#0B0F19] text-white overflow-hidden pt-28 pb-16">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatingGlow}
          animate="animate"
          className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[120px] top-[-120px] left-[-120px]"
        />
        <motion.div
          variants={floatingGlow}
          animate="animate"
          className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[120px] bottom-[-120px] right-[-120px]"
        />
      </div>

      {/* center content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6"
      >

        {/* badge */}
        <motion.div
          variants={item}
          className="px-4 py-1.5 text-xs tracking-widest uppercase border border-blue-500/30 bg-blue-500/10 text-blue-300 rounded-full"
        >
          Technology Solutions Company
        </motion.div>

        {/* headline */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          <span className="text-white">
            {firstPart}
          </span>

          <span className="text-blue-500">
            {secondPart}
          </span>
        </motion.h1>

        {/* description */}
        <motion.p
          variants={item}
          className="text-lg text-gray-400 max-w-2xl"
        >
          We design and develop scalable web platforms, mobile applications,
          and business systems tailored to help organizations operate efficiently
          and grow with confidence.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-semibold transition shadow-lg shadow-blue-600/20"
          >
            View Our Work
          </motion.a>
        </motion.div>

      </motion.div>

      {/* bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-0 w-full border-t border-white/5 text-center py-4 text-xs text-gray-500"
      >
        Web Development • Mobile Applications • UI/UX Design • System Development
      </motion.div>

    </section>
  );
};

export default Hero;