import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import design1 from "../assets/design1.png";
import team0 from "../assets/team0.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import serviceBg from "../assets/serviceBg.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const AboutUsDetails = () => {
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
        <div className="space-y-12">
          {[
            {
              img: team0,
              title: "Client-Centric Approach",
              desc: `We prioritize understanding our clients' unique needs, ensuring that every solution we provide is tailored specifically for them.`,
            },
            {
              img: design2,
              title: "Innovative Solutions",
              desc: `Our team leverages the latest technology and industry trends to create cutting-edge applications that drive business success.`,
            },
            {
              img: design3,
              title: "Commitment to Excellence",
              desc: `We strive for the highest standards in quality and service, fostering long-term partnerships built on trust and mutual success.`,
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
                  className="w-48 md:w-[400px] h-auto object-contain mx-auto"
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

export default AboutUsDetails;
