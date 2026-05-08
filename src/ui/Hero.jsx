import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0B0F19] text-white flex items-center justify-center overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[120px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[120px] bottom-[-120px] right-[-120px]" />
      </div>

      {/* center content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">

        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 text-xs tracking-widest uppercase border border-blue-500/30 bg-blue-500/10 text-blue-300 rounded-full"
        >
          Technology Solutions Company
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          Building Reliable Digital
          <span className="block text-blue-500">
            Products & Systems
          </span>
        </motion.h1>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl"
        >
          We design and develop scalable web platforms, mobile applications,
          and business systems tailored to help organizations operate efficiently
          and grow with confidence.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <a
            href="/products"
            className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-semibold transition shadow-lg shadow-blue-600/20"
          >
            View Our Work
          </a>

          <a
            href="/contact"
            className="border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg text-sm font-semibold transition"
          >
            Contact Us
          </a>
        </motion.div>

      </div>

      {/* bottom strip */}
      <div className="absolute bottom-0 w-full border-t border-white/5 text-center py-4 text-xs text-gray-500">
        Web Development • Mobile Applications • UI/UX Design • System Development
      </div>
    </section>
  );
};

export default Hero;