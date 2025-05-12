import logo from "@/assets/logo-uk.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialInstagram from "@/assets/social-insta.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialPin from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-6 text-center">
      <div className="container">
        <div className="flex justify-center">
          <Image src={logo} alt="UK Logo" height={40} width={40} />
        </div>
        <div className="flex gap-4 mt-4 items-center justify-center">
          <SocialInstagram />
          <SocialX />
          <SocialLinkedin />
          <SocialYoutube />
          <SocialPin />
        </div>
        <p className="text-sm text-gray-300 mt-4">
          &copy; {new Date().getFullYear()} UK Global Immigration Services. All
          rights reserved
        </p>
        <p className="text-sm text-gray-300 mt-4">Developed by Sheeraz</p>
      </div>
    </footer>
  );
};
