import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import team0 from "../assets/team0.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import serviceBg from "../assets/serviceBg.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const AboutUsDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    {
      img: team0,
      title: "Client-Centric Approach",
      desc: `We prioritize understanding each client's unique needs, ensuring every solution is tailored to deliver real value.`,
    },
    {
      img: design2,
      title: "Innovative Solutions",
      desc: `We leverage modern technologies and proven strategies to build solutions that help businesses grow and stay competitive.`,
    },
    {
      img: design3,
      title: "Commitment to Excellence",
      desc: `We maintain high standards in quality and delivery, building long-term partnerships based on trust and results.`,
    },
  ];

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
        <div className="space-y-12">
          {items.map((item, index) => (
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

export default AboutUsDetails;