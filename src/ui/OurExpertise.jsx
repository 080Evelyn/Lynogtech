import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import mobile from "../assets/mobile.png";
import web from "../assets/web.png";
import consult from "../assets/consult.png";

const expertiseData = [
  {
    title: "Custom Mobile Applications",
    description:
      "We design and engineer high-performance mobile applications tailored to your users, delivering seamless experiences backed by security and scalability.",
    image: mobile,
  },
  {
    title: "Dynamic Web Applications",
    description:
      "From intuitive interfaces to powerful backend systems, we build web applications that drive efficiency, engagement, and business growth.",
    image: web,
  },
  {
    title: "Consultation & Strategy",
    description:
      "We help you define, refine, and execute your product vision with clear technical direction and business-focused strategies.",
    image: consult,
  },
];

const ExpertiseCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-[#0B1220]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
    >
      <div className="flex-shrink-0">
        <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 transition">
          <img
            src={item.image}
            alt={item.title}
            className="w-20 md:w-24 object-contain"
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-lg md:text-2xl font-semibold text-white mb-2">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const OurExpertise = () => {
  return (
    <section className="relative bg-[#060B16] py-20 px-6 md:px-12 overflow-hidden">

      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Our Expertise
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Delivering high-quality technology solutions engineered for performance,
            scalability, and long-term business value.
          </p>
        </div>

        <div className="space-y-10">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;