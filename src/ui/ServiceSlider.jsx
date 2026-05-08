import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../assets/slider1.png";
import slide2 from "../assets/slider2.png";
import slide3 from "../assets/slider3.png";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: slide1,
    title: "End-to-End Product Development",
    text: "From initial consultation to deployment and ongoing support, we guide businesses through every stage of building reliable digital solutions.",
  },
  {
    image: slide2,
    title: "Mobile Application Development",
    text: "We create high-performance, user-friendly mobile applications designed to work seamlessly across devices and platforms.",
  },
  {
    image: slide3,
    title: "Web & System Development",
    text: "We build scalable web platforms and business systems that improve efficiency and support long-term growth.",
  },
];

const ServiceSlider = () => {
  return (
    <section className="bg-[#0B0F19] py-20 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            What We Do
          </h2>
          <p className="text-gray-400 mt-3">
            We provide structured digital solutions tailored to help businesses
            operate efficiently, scale confidently, and deliver real value.
          </p>
        </div>

        {/* SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              nextEl: ".custom-next",
              prevEl: null,
            }}
            spaceBetween={40}
            slidesPerView={1}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-2 gap-10 items-center">

                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[350px] md:h-[450px] object-cover rounded-xl border border-white/10"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 blur-2xl -z-10" />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col gap-5 relative">

                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      {slide.title}
                    </h3>

                    <p className="text-gray-400 text-base leading-relaxed max-w-md">
                      {slide.text}
                    </p>

                    {/* arrow */}
                    <div className="custom-next mt-6 cursor-pointer text-blue-500 hover:text-blue-400 transition">
                      <ChevronRight size={40} />
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSlider;