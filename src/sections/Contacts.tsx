import Image from "next/image";
import contactsImage from "@/assets/contacts.png";
import { IoMdContact } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="py-12 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]"
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Contacts</div>
        </div>
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          Get in Touch
        </h2>
        <p className="text-xl text-[#010D3E] tracking-tight mt-5 text-center max-w-xl mx-auto">
          We are here to help you with your immigration needs. Please feel free
          to contact us.
        </p>
        <div className="grid md:grid-cols-2 gap-6 items-center mt-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-1">
              <IoMdContact size={30} />
              <div className="font-semibold">Mr Abbas Hafeez</div>
              <div>IAA, UK Immigration Adviser</div>
              <div>LL.B. MA Criminal Justice System UK</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <IoLocationSharp size={30} />
              <div className="font-semibold">
                UK Global Immigration Services
              </div>
              <div>147 Dickenson Road, Manchester, M14 5HZ</div>
              <div>England, United Kingdom</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <IoCallSharp size={30} />
              <div className="font-semibold">info@ukgis.com</div>
              <div>+44 7456042986</div>
              <div>01612582397</div>
            </div>
          </div>

          <Image
            src={contactsImage}
            alt="Contact Us"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
