import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceBg from "../assets/serviceBg.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MobileSolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 px-4 md:px-8 overflow-hidden bg-[#D2E3FA]">
      {/* Background Image */}
      <div
        className="absolute w-[50%] inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url('${serviceBg}')` }}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 italic">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Innovative Mobile Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Transforming your ideas into user-friendly mobile experiences.
          </p>
        </motion.div>

        {/* Feature List */}
        <div className="space-y-12">
          {[
            {
              img: service1,
              title: "Post-Launch Support",
              desc: `Our commitment to your success doesn't end at launch. We provide ongoing support and maintenance to ensure your app remains updated, secure, and optimized for performance.`,
            },
            {
              img: service2,
              title: "Custom App Design",
              desc: `Our team specializes in creating unique and tailored mobile app designs that resonate with your brand identity. We ensure that every visual element is optimized for user engagement and functionality.`,
            },
            {
              img: service2,
              title: "Cross-Platform Development",
              desc: `We leverage cutting-edge technologies to develop apps that work seamlessly across various platforms. Whether it's iOS or Android, our apps maintain consistent performance and user experience.`,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
              <div className="flex-shrink-0 mb-6 md:mb-0 text-center">
                <img
                  src={item.img}
                  alt="Mobile App"
                  className="w-48 h-auto object-contain mx-auto"
                />
              </div>
              <div className="text-center italic md:!space-y-10 md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed md:text-lg">
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
