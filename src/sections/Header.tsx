"use client";
import Image from "next/image";
import Logo from "@/assets/logo-uk.png";
import splitStringUsingRegex from "../../utils/splitStringUsingRegex";
import { motion, Variants } from "framer-motion";
import { nanoid } from "nanoid";

const upperBodyText = "Start your UK immigration journey with confidence";

export const Header = () => {
  const splitText = splitStringUsingRegex(upperBodyText);
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm z-20">
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{
            staggerChildren: 0.09,
          }}
        >
          {splitText.map((char) => (
            <motion.span
              key={nanoid()}
              transition={{
                duration: 0.5,
              }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div className="py-5">
        <div className="container px-1">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="UK Logo" width={80} />
            <ul className="flex gap-4 md:gap-6 text-black/60 items-center mr-3">
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("contacts")}>
                Contacts
              </button>
              <button onClick={() => scrollToSection("faqs")}>FAQs</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
