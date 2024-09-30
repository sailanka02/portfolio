"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "I have experience in developing web applications using various technologies for around 3+ years. I have a Full Stack Development certification with Codeacademy.",
    href: "https://www.saiprashanthlanka.com/work",
  },
  {
    num: "02",
    title: "Machine Learning/Data Science",
    description:
      "I have been working on Machine Learning and Data Science projects for the past 2 years. I have a certification in Machine Learning from LinkedIn.",
    href: "https://www.saiprashanthlanka.com/work",
  },
  {
    num: "03",
    title: "Cyber Security",
    description:
      "I have done a 4 year degree on Cyber Security and have been working in various Networking and Security classes.",
    href: "https://www.saiprashanthlanka.com/work",
  },
  {
    num: "04",
    title: "Cloud Computing",
    description:
      "I have been working on Cloud Computing projects for the past 2 years in AWS. I have a certification in Cloud Computing from AWS. I also have working experience with Azure and GCP.",
    href: "https://www.saiprashanthlanka.com/work",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <Link
                    href={service.href}
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </Link>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
