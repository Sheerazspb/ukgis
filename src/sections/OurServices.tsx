import Image from "next/image";
import servicesImg from "@/assets/service1.png";

export const OurServices = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-12">
      <div className="container">
        <div className="flex justify-center flex-col">
          <div className="tag text-center w-fit mx-auto">
            Boost your process
          </div>
          <div className="text-center lg:w-3/4 justify-center mx-auto mt-8">
            <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              A more effective way to get your destination
            </h2>
          </div>
          <h3 className="text-center text-2xl md:text-4xl font-bold mt-10">
            Our Services
          </h3>
        </div>
        <div className="md:flex flex-col md:flex-row h-full w-full gap-6 justify-between items-center mt-10 lg:mt-0">
          <Image
            src={servicesImg}
            alt="Services"
            width={400}
            className="md:w-1/2 md:mt-0 lg:mt-0 lg:w-1/2"
          />
          <p className="text-xl text-[#010D3E] tracking-tight lg:w-[800px]">
            At UK GIS, we offer a full range of immigration services tailored to
            individuals, families, and businesses. Whether you are applying for
            a UK visa, seeking permanent residency, or need expert guidance on
            complex immigration matters, our experienced team is here to help.
            We provide end-to-end legal support with a focus on accuracy,
            compliance, and your long-term success in the UK. Our organization
            is regulated by the <span className="text-blue-500">IAA</span>, UK
            with registration number:{" "}
            <span className="text-blue-500">F201300759</span>. Our professional
            services fee is competitive and reasonable.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-2">
          <p className="text-xl text-[#010D3E] tracking-tight ">
            🧑‍🎓 <strong>For Students or General Audience:</strong> At UK GIS, we
            help make your move to the UK easier. From student and work visas to
            family sponsorships and permanent residency, we guide you through
            each step. Our goal is to make the immigration process simple,
            clear, and stress-free—so you can focus on building your future in
            the UK.
          </p>
          <p className="text-xl text-[#010D3E] tracking-tight">
            🧑‍💼 <strong>For Business or Corporate Clients:</strong> UK GIS offers
            strategic immigration services for businesses, entrepreneurs, and
            skilled professionals. We specialize in work sponsorships, visa
            compliance, and corporate immigration planning. With a deep
            understanding of UK immigration law, we ensure smooth, legally sound
            solutions for you and your team.
          </p>
        </div>
      </div>
    </section>
  );
};
