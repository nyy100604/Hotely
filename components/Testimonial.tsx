"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
//swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    img: "/assets/testimonials/img-1.png",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur minus amet, sequi nisi omnis velit, nemo officia error blanditiis esse tempore doloribus non ea ex excepturi in, quisquam distinctio debitis. Odit sed vero ducimus in.",
    personName: "Robert Rene",
    location: "Singapore",
  },
  {
    img: "/assets/testimonials/img-2.png",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur minus amet, sequi nisi omnis velit, nemo officia error blanditiis esse tempore doloribus non ea ex excepturi in, quisquam distinctio debitis. Odit sed vero ducimus in.",
    personName: "Robert Rene",
    location: "Singapore",
  },
];

const Testimonial = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="bg-soft_green h-[760px]"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={slide.img}
                    alt=""
                    width={470}
                    height={470}
                    quality={100}
                    className="hidden xl:flex"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-lg leading-9 mb-8">{slide.personName}</p>
                    <p className="text-xl font-bold">{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonial;
