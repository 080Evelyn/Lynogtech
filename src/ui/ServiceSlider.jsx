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
    text: (
      <>
        <strong>
          From initial consultation to final deployment and ongoing support, we
          provide comprehensive services that guide you through every stage of
          your project.
        </strong>
      </>
    ),
  },
  {
    image: slide2,
    text: (
      <>
        <strong>
          Our team excels in creating user-friendly mobile applications tailored
          to your specific needs, ensuring seamless functionality across various
          devices and platforms.
        </strong>
      </>
    ),
  },
  {
    image: slide3,
    text: (
      <>
        <strong>
          We develop powerful web applications designed for performance and
          scalability, enabling businesses to operate efficiently and
          effectively in today's digital landscape.
        </strong>
      </>
    ),
  },
];

const ServiceSlider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-12 px-4 md:px-10">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: null,
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-7xl mx-auto">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <img
                src={slide.image}
                alt="Slide"
                className="w-full md:w-[40%] h-[400px] md:h-[600px] border-4 border-blue-700 rounded-md"
              />
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative">
                <p className="text-lg md:text-2xl italic text-gray-600 text-left">
                  {slide.text}
                </p>
                {/* Custom arrow */}
                <div className="custom-next absolute bottom-0 right-0 cursor-pointer text-blue-700 text-3xl hover:text-blue-900 transition duration-300">
                  {/* <span className="inline-block rotate-[-45deg] text-4xl">
                    &#10140;
                  </span> */}
                  <ChevronRight size={54} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ServiceSlider;
