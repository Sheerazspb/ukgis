"use client";
import iaaLogo from "@/assets/IAA.png";
import jcwiLogo from "@/assets/JCWI.png";
import ukLogo from "@/assets/logo-uk-rotate.png";
import immigrationAdviceLogo from "@/assets/immigration-advice.png";
import jcwiTextLogo from "@/assets/JCWI-rotate.png";
import ukGlobalLogo from "@/assets/uk-global-immigration.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-6 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={iaaLogo} alt="IAA Logo" className="logo-ticker-image" />
            <Image
              src={jcwiTextLogo}
              alt="JCWI Text Logo"
              className="logo-ticker-image"
            />
            <Image src={ukLogo} alt="UK Logo" className="logo-ticker-image" />
            <Image
              src={immigrationAdviceLogo}
              alt="ImmAdvice Logo"
              className="logo-ticker-image"
            />
            <Image
              src={jcwiLogo}
              alt="JCWI Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ukGlobalLogo}
              alt="UKGlobal Logo"
              className="logo-ticker-image"
            />
            {/* Repeat the logos for infinite scrolling */}
            <Image src={iaaLogo} alt="IAA Logo" className="logo-ticker-image" />
            <Image
              src={jcwiTextLogo}
              alt="JCWI Text Logo"
              className="logo-ticker-image"
            />
            <Image src={ukLogo} alt="UK Logo" className="logo-ticker-image" />
            <Image
              src={immigrationAdviceLogo}
              alt="ImmAdvice Logo"
              className="logo-ticker-image"
            />
            <Image
              src={jcwiLogo}
              alt="JCWI Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ukGlobalLogo}
              alt="UKGlobal Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
