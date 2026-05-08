import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceBg from "../assets/serviceBg.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const features = [
  {
    img: service1,
    title: "Post-Launch Support",
    desc: `Our commitment doesn’t end at launch. We provide continuous updates, monitoring, and maintenance to keep your app secure and optimized.`,
  },
  {
    img: service2,
    title: "Custom App Design",
    desc: `We craft user-focused mobile applications tailored to your brand, ensuring intuitive navigation and strong engagement.`,
  },
  {
    img: service2,
    title: "Cross-Platform Development",
    desc: `We build apps that work seamlessly across iOS and Android with consistent performance and scalability.`,
  },
];

const MobileSolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-16 px-4 md:px-10 overflow-hidden bg-[#080B1A]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center"
        style={{ backgroundImage: `url('${serviceBg}')` }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Innovative Mobile Solutions
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Transforming your ideas into user-friendly mobile experiences.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index * 0.2}
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-32 md:w-44 object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left max-w-lg">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
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

export default MobileSolutionsSection;