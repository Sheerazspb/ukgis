"use client";
import lawyerImage from "@/assets/lawyer.png";
import plane from "@/assets/plane.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="about"
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Our Purpose & Values</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              UK Global Immigration Services
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-[345px]">
              At UK Global Immigration Services, we provide expert legal
              guidance to individuals, families, and businesses navigating the
              UK immigration system. Whether you are applying for a visa,
              seeking permanent residency, or facing complex immigration
              challenges, our experienced immigration lawyers are here to help.
            </p>
          </div>
          <div className="mt-20  md:mt-0 md:w-[478px] relative">
            <Image src={lawyerImage} alt="Lawyer" priority />
            <motion.img
              src={plane.src}
              alt="Plane"
              width={180}
              className="hidden lg:block md:block absolute top-[380px] left-[225px] lg:top-[440px] lg:left-[250px]"
              animate={{
                translateY: [30, -30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
