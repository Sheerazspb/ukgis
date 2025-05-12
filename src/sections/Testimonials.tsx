"use client";
import Image from "next/image";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "UK GIS guided me through every visa step, making the entire process smooth, stress-free, and incredibly efficient.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "I felt completely supported and informed from day one—UK GIS truly made immigration feel simple and achievable.",

    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "They are incredibly professional, always quick to respond, and truly understand the UK immigration system inside and out.",

    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Their team handled our complex visa case with confidence, care, and the professionalism we had hoped for.",

    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "From consultation to approval, UK GIS delivered expert advice, personal attention, and reliable legal support at every stage.",

    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "We were amazed by their dedication, accuracy, and constant communication—UK GIS truly earned our trust and respect.",

    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Thanks to their guidance, I avoided delays and submitted everything correctly the first time—truly a reliable partner.",

    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Clear communication, legal accuracy, and a personal touch—UK GIS exceeded all our expectations during this stressful process.",

    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Fast response, professional service, and deep legal knowledge—I would absolutely recommend UK GIS to anyone moving to the UK.",

    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonial: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      className="flex flex-col gap-6 pb-6"
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: props.duration ?? 10,
        ease: "linear",
      }}
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonial.map(({ text, imageSrc, name, username }) => (
            <div
              key={name}
              className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
            >
              <p>{text}</p>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} />
                <div className="flex flex-col">
                  <p className="font-medium tracking-tight leading-5">{name}</p>
                  <p className="text-sm text-[#010D3E]/60">{username}</p>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8">
          Global Clients. Local Trust.
        </h2>
        <p className="text-xl text-[#010D3E] tracking-tight mt-8 text-center max-w-3xl mx-auto">
          At UK GIS, we are committed to delivering expert, reliable immigration
          support. Read what our clients say about the results and service they
          received.
        </p>
        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px]">
          <TestimonialsColumn testimonial={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonial={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonial={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
