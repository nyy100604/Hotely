"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Featured = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]"
    >
      <div className="flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left">
        <Image
          className="xl:mr-[50px]"
          src="/assets/featured/icon.svg"
          alt=""
          width={73}
          height={84}
        />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
          Book an awesome room in less than 1 minute.
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nesciunt nisi earum? Quasi dolorum aliquid pariatur deserunt facilis
          ipsa tempore illo delectus unde a. Perferendis nobis non temporibus
          est error.
        </p>
      </div>
    </motion.section>
  );
};

export default Featured;
