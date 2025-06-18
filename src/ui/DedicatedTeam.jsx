import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceBg from "../assets/serviceBg.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const DedicatedTeam = () => {
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
            Our Dedicated Team
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            A group of passionate professionals committed to delivering
            exceptional results.
          </p>
        </motion.div>

        {/* Feature List */}
        <div className="space-y-12">
          {[
            {
              img: team1,
              title: "Experienced Developers",
              desc: `Our developers bring years of experience in mobile and web application development, ensuring that every project is executed with precision and skill. Their diverse backgrounds allow us to tackle challenges from multiple angles, delivering innovative solutions that meet our clients' needs.`,
            },
            {
              img: team2,
              title: "Creative Designers",
              desc: `Our design team specializes in creating visually stunning and user-friendly interfaces. They are dedicated to enhancing user experience through thoughtful design, making sure that our applications are not only functional but also engaging and easy to use.`,
            },
            {
              img: team3,
              title: "Strategic Project Managers",
              desc: `Our project managers are experts in aligning project goals with client expectations. They ensure that timelines are met, resources are allocated efficiently, and communication channels remain open, guiding projects to successful completion.`,
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

export default DedicatedTeam;
