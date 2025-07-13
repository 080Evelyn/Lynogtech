import { motion } from "framer-motion";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

export default function ClientTestimonials() {
  const testimonials = [
    {
      id: 1,
      title: "Exceptional Service",
      description:
        "Lynog Tech helped us transform our idea into a fully functional app. Their professionalism and dedication were outstanding.",
      image: client1,
    },
    {
      id: 2,
      title: "Reliable Partnership",
      description:
        "Working with Lynog Tech has been a game-changer for our business. They delivered on time and exceeded our expectations.",
      image: client2,
    },
    {
      id: 3,
      title: "Innovative Solutions",
      description:
        "The team at Lynog Tech provided us with innovative solutions that have significantly improved our operational efficiency.",
      image: client3,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl italic font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
            Client satisfaction is our top priority, and their success stories
            are a testament to our dedication and expertise.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index * 0.3}
              variants={fadeUp}
              className="rounded-xl p-8 shadow-lg bg-white">
              <div className="flex items-center flex-col justify-center mb-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="w-full md:h-70 object-cover rounded"
                  />
                </div>
                <h3 className="text-xl font-bold my-4 text-center italic">
                  {testimonial.title}
                </h3>
                <p className="text-center text-lg text-gray-600 italic leading-relaxed">
                  {testimonial.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Last Testimonial */}
        <motion.div
          custom={0.6}
          variants={fadeUp}
          className="flex justify-center">
          <div className="rounded-xl shadow-lg p-8 w-full max-w-md lg:max-w-xl bg-white">
            <div className="flex items-center flex-col justify-center mb-6">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img
                  src={testimonials[2].image}
                  alt={testimonials[2].title}
                  className="w-full md:h-70 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold italic my-4 text-center">
                {testimonials[2].title}
              </h3>
              <p className="text-center text-lg text-gray-600 italic leading-relaxed">
                {testimonials[2].description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
