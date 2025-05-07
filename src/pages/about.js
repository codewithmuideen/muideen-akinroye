import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

const stats = [
  {
    id: 1,
    value: 55,
    name: "Projects Completed",
  },
];

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Muideen Akinroye | About</title>
        <meta
          name="description"
          content="Learn more about Muideen Akinroye, a passionate web developer and software engineer specializing in creating high-performance, user-focused digital experiences. Discover his skills, experience, and approach to web development."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center pt-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-12 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
          />

          {/* Biography Section */}
          <div className="w-full mb-16 flex flex-col items-start justify-start">
            <h2
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75"
            >
              Biography
            </h2>
            <p
              className="font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Hello, I'm Muideen Akinroye, a Certified Web Developer and Coding Instructor
              with a strong foundation in full-stack development and project management. My
              passion lies in building user-centric, responsive, and visually compelling
              websites and web apps that transform ideas into impactful digital solutions.
              Proficient in modern programming languages and frameworks, I bring both
              technical precision and creative flair to every project.
            </p>
            <p
              className="my-4 font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              A quick learner and problem-solving enthusiast, I am eager to tackle novel
              challenges with a blend of creativity and strategic thinking. Driven by a
              passion to create impactful websites that elevate businesses and organizations
              toward their aspirations.
            </p>
          </div>

          {/* Stats and Projects Link */}
          <div className="w-full flex flex-col items-center justify-center mb-16">
            {stats.map(({ id, value, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center my-4"
              >
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimateNumbers value={value} />+
                </span>
                <h2 className="text-xl font-medium text-center capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xs:text-sm">
                  {name}
                </h2>
              </div>
            ))}

            <Link
              href="/projects"
              className="flex items-center bg-dark text-light mt-6 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base"
            >
              View Projects
            </Link>
          </div>

          {/* Additional Sections */}
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
