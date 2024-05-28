"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const options = !isMobile ? { threshold: 0.5 } : {};

  const [ref, inView] = useInView(options);

  console.log(isMobile);

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* img */}
          <motion.div
            className="flex-1 relative"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <Image
              src={"/assets/about/img2.png"}
              width={559}
              height={721}
              alt=""
            />
          </motion.div>
          {/* text */}
          <motion.div
            className="xl:max-w-[470px]"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              eligendi beatae illum optio id eum repellat laboriosam ipsam. Ad
              autem delectus enim beatae velit reprehenderit, molestias
              necessitatibus mollitia? Sapiente, ullam!
            </p>
            <div className="my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </div>
            <p className="mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos illum dolore quisquam? Ipsam amet minima excepturi
              inventore tenetur qui ab autem ad aspernatur culpa! Ab, at?
              Placeat vero aut reiciendis.
            </p>
            <Button variant="accent">Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
