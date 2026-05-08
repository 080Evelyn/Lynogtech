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
        "Lynog Tech helped us transform our idea into a fully functional product. Their professionalism and attention to detail stood out throughout the project.",
      image: client1,
    },
    {
      id: 2,
      title: "Reliable Partnership",
      description:
        "Working with Lynog Tech has been a strong advantage for our business. They delivered on time and maintained clear communication from start to finish.",
      image: client2,
    },
    {
      id: 3,
      title: "Efficient & Scalable Solutions",
      description:
        "The solutions provided significantly improved our operations. The team understands business needs and delivers with precision.",
      image: client3,
    },
  ];

  return (
    <section className="bg-[#0B0F19] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Client Testimonials
          </h2>
          <p className="text-gray-400 mt-3">
            We focus on delivering reliable solutions that create real impact
            for businesses. Here’s what some of our clients have to say.
          </p>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-500/30 transition"
            >

              {/* IMAGE */}
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-white">
                {t.title}
              </h3>

              {/* TEXT */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}