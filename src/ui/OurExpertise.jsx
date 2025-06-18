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
      "We design and develop custom mobile applications that cater to your target audience. Our focus is on creating engaging user experiences while ensuring technical robustness and security.",
    image: mobile,
  },
  {
    title: "Dynamic Web Applications",
    description:
      "Our web application services encompass everything from front-end design to back-end development, providing you with a complete solution that enhances user interaction and maximizes efficiency.",
    image: web,
  },
  {
    title: "Consultation and Strategy",
    description:
      "We offer expert consultation to help you define your project goals and devise a strategy that aligns with your business objectives, ensuring a successful outcome.",
    image: consult,
  },
];

const OurExpertise = () => {
  return (
    <section className="bg-[#D2E3FA] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold italic text-3xl md:text-4xl">
            Our Expertise at Your Service
          </h2>
          <p className="text-sm md:text-base mt-2 font-bold italic text-gray-700">
            Delivering exceptional technology solutions tailored to meet your
            unique business requirements.
          </p>
        </div>

        <div className="space-y-12">
          {expertiseData.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: true,
              margin: "0px 0px -100px 0px",
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center md:space-x-6 bg-white rounded-lg p-6 shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 md:w-50 h-auto border-4 border-blue-700 rounded-md mb-4 md:mb-0"
                />
                <div>
                  <h3 className="font-bold italic text-center md:text-start text-lg md:text-2xl mb-2 items-center">
                    {item.title}
                  </h3>
                  <p className=" italic text-center md:text-start  md:text-lg text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
