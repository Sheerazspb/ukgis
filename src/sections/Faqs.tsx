"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  id: number;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What types of UK visas do you help with?",
    answer:
      "We assist with all major UK visa types including work, student, family, visitor, business, and settlement visas.",
  },
  {
    id: 2,
    question: "How much does your service cost?",
    answer:
      "Our professional services fee is competitive and reasonable. We offer transparent pricing and do not charge hidden fees. Our fee covers all legal services, including consultations, document preparation, representation, and submission of your application.",
  },
  {
    id: 3,
    question: "How long does the immigration process take?",
    answer:
      "The duration of the immigration process varies depending on the type of visa or residency application you are applying for. Some applications can be processed relatively quickly, while others may take several months. Our team will provide you with an estimated timeline during your initial consultation.",
  },
  {
    id: 4,
    question: "Can you help if my visa application was refused?",
    answer:
      "Yes, we can help with this. We can provide guidance on how to improve your application and ensure that it is submitted in compliance with the UK immigration rules.",
  },
  {
    id: 5,
    question: "What is the difference between a visa and residency?",
    answer:
      "A visa is a temporary permit that allows you to enter and stay in the UK for a specific period. It is usually granted for a limited time and requires you to leave the UK before the visa expires. On the other hand, residency is a longer-term status that allows you to live and work in the UK for an extended period. Residency can be granted for different durations, such as indefinite leave to remain (ILR) or permanent residency. The residency application process is more complex and requires meeting specific criteria, such as having a job offer or a family member in the UK.",
  },
  {
    id: 6,
    question: "Do you offer consultations before starting the application?",
    answer:
      "Yes, we offer one-on-one consultations to assess your situation and recommend the best immigration path forward.",
  },
  {
    id: 7,
    question: "Can you help with permanent residency or British citizenship?",
    answer:
      "Absolutely. We guide clients through ILR (Indefinite Leave to Remain) applications and citizenship by naturalization.",
  },
  {
    id: 8,
    question: "Are your services available to clients outside the UK?",
    answer:
      "Yes, we work with global clients and handle UK immigration cases remotely through secure online communication.",
  },
  {
    id: 9,
    question: "Do you offer consultations before starting the application?",
    answer:
      "Yes, we offer one-on-one consultations to assess your situation and recommend the best immigration path forward.",
  },
  {
    id: 10,
    question: "Is your organization regulated by the IAA and registered?",
    answer:
      "Yes, we are registered with the IAA with registration number: F201300759.And registered with the Joint Council for Welfare of Immigrants with registration number: 4471.",
  },
];

export const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-12 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]"
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">FAQs</div>
        </div>
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          Need Help? Start Here
        </h2>
        <p className="text-xl text-[#010D3E] tracking-tight mt-5 text-center">
          We have compiled a list of frequently asked questions to help you
          understand our services better. If you have any questions that are not
          answered here, please do not hesitate to contact us.
        </p>
        <div className="flex flex-col gap-4 mt-10">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-[#222222]/10 rounded-2xl shadow-[0_7px_14px_#EAEAEA] overflow-hidden"
            >
              <button
                className="w-full p-6 flex justify-between items-center text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <span className="transform transition-transform duration-200 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-6 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
