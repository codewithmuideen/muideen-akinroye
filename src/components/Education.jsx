import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const education = [
  {
    id: 1,
    type: "Bachelor's in Computer Engineering",
    place: "Ladoke Akintola University of Technology",
    time: "Completed in 2012",
    info: "A Bachelor of Science in Computer Engineering is a comprehensive program that combines the principles of Diploma in Website Development and electrical engineering, equipping students with the skills to design, develop, and optimize software systems and applications. Graduating in 2012, I gained in-depth knowledge of software engineering, programming, and systems design, laying the foundation for a successful career in tech innovation and development.",
  },
  {
    id: 2,
    type: "Diploma in Software Engineering",
    place:
      "Prime Innovation Institute of Technology",
    time: "Completed in 2015",
    info: "An intermediate-level diploma program focused on the core principles of software engineering. This course provided hands-on experience with programming, software design, development methodologies, and debugging techniques, equipping me with essential skills to build efficient, scalable, and user-friendly software solutions.",

  },
  {
    id: 3,
    type: "Diploma in Website Development",
    place:
      "Omojowo Web Technology",
    time: "Completed in 2017",
    info: "A foundational diploma program in website development, focusing on key web technologies such as HTML, CSS, JavaScript, and web design principles. This course provided the essential skills to create responsive, visually appealing, and functional websites, laying the groundwork for my expertise in web development.",
  },
];

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div>
        <h3
          className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
          intial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[50%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {education.map(({ id, type, time, place, info }) => (
            <Details
              key={id}
              type={type}
              time={time}
              place={place}
              info={info}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
