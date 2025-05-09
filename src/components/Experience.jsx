import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const experiences = [
  {
    id: 1,
    position: "Chief Technology Officer",
    company: "MacTech",
    companyLink: "https://mactechnigeria.com.ng/",
    time: "Current",
    address: "Plot 3, Opp. Govt. House Annex, Okefia Osogbo",
    work: "As the Chief Technology Officer (CTO) at MacTech Nigeria, I guide the technical team to build, optimize, and maintain high-performance websites and applications, ensuring they align with business objectives and deliver exceptional user experiences. My responsibilities include overseeing both front-end and back-end development, managing web security, and staying ahead of technology trends to maintain a competitive edge.",
  },
  {
    id: 2,
    position: "Website Developer",
    company: "Aptech",
    companyLink: "http://aptech.ng/",
    time: "Mar 2022 - Feb 2024",
    address: "Bold Plaza, Opp. Dada Estate Police Station, Dada Estate Osogbo",
    work: "As a Website Developer at Aptech Osogbo from March 2022 to February 2024, I was responsible for designing, developing, and maintaining dynamic websites and web applications. My role involved working closely with clients to understand their requirements, translating them into responsive and user-friendly designs, and ensuring seamless functionality across different platforms. I also focused on optimizing websites for performance, scalability, and security, ensuring that each project met high standards of quality and user experience.",
  },
  {
    id: 3,
    position: "Frontend Developer",
    company: "Aptech",
    companyLink: "https://aptechajah.com/",
    time: "Feb 2018 - Jan 2022",
    address: "22, Yomi Ajetunmobi Avenue, Thera Peace Zone Estate, Alfa Bus Stop,Sangotedo, Lekki - Epe Expy, Eti-Osa, Lagos 101243, Lagos",
    work: "As a Website Developer at Aptech Ajah from February 2018 to January 2024, I was responsible for designing, developing, and maintaining dynamic websites and web applications. My role involved working closely with clients to understand their requirements, translating them into responsive and user-friendly designs, and ensuring seamless functionality across different platforms. I also focused on optimizing websites for performance, scalability, and security, ensuring that each project met high standards of quality and user experience.",
  },
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-2xl font-bold capitalize sm:text-xl xs:text-lg"
          initial={{ y: 50 }} // corrected typo from intial to initial
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {position}&nbsp;{" "}
          <a style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink} // Now using companyLink to make the company name clickable
          >
            @{company}
          </a>
        </h3>
        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2  style={{ fontFamily: "'Montserrat', sans-serif" }} className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[50%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          {experiences.map(
            ({ id, position, company, companyLink, time, address, work }) => (
              <Details
                key={id}
                position={position}
                company={company}
                companyLink={companyLink}
                time={time}
                address={address}
                work={work}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
