import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceBg from "../assets/serviceBg.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const DedicatedTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const team = [
    {
      img: team1,
      title: "Experienced Developers",
      desc: `Our developers bring strong expertise in building scalable web and mobile applications, delivering reliable and efficient solutions.`,
    },
    {
      img: team2,
      title: "Creative Designers",
      desc: `Our designers craft intuitive and visually engaging interfaces that enhance user experience and product usability.`,
    },
    {
      img: team3,
      title: "Strategic Project Managers",
      desc: `We ensure smooth execution through clear planning, efficient coordination, and consistent communication.`,
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
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Our Dedicated Team
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            A team of professionals committed to delivering high-quality results.
          </p>
        </motion.div>

        {/* Team Items */}
        <div className="space-y-12">
          {team.map((item, index) => (
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

export default DedicatedTeam;