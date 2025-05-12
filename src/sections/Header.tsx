"use client";
import Image from "next/image";
import Logo from "@/assets/logo-uk.png";

export const Header = () => {
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
        <p>Start your UK immigration journey with confidence</p>
      </div>
      <div className="py-5">
        <div className="container px-1">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="UK Logo" height={80} width={80} />
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
