import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const DynamicWebSolutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const features = [
    {
      img: design1,
      title: "User-Centric Design",
      desc: `We design intuitive and accessible interfaces focused on user experience, ensuring your application is easy to navigate, efficient, and aligned with user expectations.`,
    },
    {
      img: design2,
      title: "Scalable Architecture",
      desc: `Our systems are engineered for growth, with robust backend architecture capable of handling increased traffic, data, and business expansion without performance compromise.`,
    },
    {
      img: design3,
      title: "Integration Solutions",
      desc: `We integrate third-party services and APIs seamlessly, enabling enhanced functionality, automation, and a unified digital ecosystem for your business.`,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-12 bg-[#060B16] overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Web Application Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            We build scalable, high-performance web applications designed to
            support business growth and deliver seamless user experiences.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="space-y-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index * 0.15}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`group flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-[#0B1220]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* IMAGE */}
              <div className="flex-shrink-0">
                <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 transition">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-32 md:w-40 object-contain"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-center md:text-left max-w-xl">
                <h3 className="text-lg md:text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicWebSolutions;