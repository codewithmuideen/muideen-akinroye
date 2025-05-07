import AnimatedText from "@/components/AnimatedText";
// import './About.css'
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image"; // Keep this
import React, { useEffect, useRef } from "react";
// Remove this import, we'll use a string path
// import profilePic from "../../public/images/profile/profile-pic-1.png";
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

const About = () => { // Changed component name to start with uppercase 'A' for convention
  return (
    <>
      <Head>
        <title>Muideen Akinroye | About</title>
        <meta
          name="description"
          content="Learn more about Muideen Akinroye, a passionate web developer and software engineer specializing in creating high-performance, user-focused digital experiences. Discover his skills, experience, and approach to web development." // Slightly different meta description for the about page
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center pt-16 dark:text-light"> {/* Added dark:text-light and mt-16 to pt-16 for consistency */}
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 style={{fontFamily: "'Montserrat', sans-serif"}} className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium" style={{fontFamily: "'Montserrat', sans-serif"}}>
                Hello, I'm Muideen Akinroye, a Certified Web Developer and Coding Instructor with a strong foundation in full-stack development and project management. My passion lies in building user-centric, responsive, and visually compelling websites and web apps that transform ideas into impactful digital solutions. Proficient in modern programming languages and frameworks, I bring both technical precision and creative flair to every project.
              </p>
              <p className="my-4 font-medium" style={{fontFamily: "'Montserrat', sans-serif"}}>
                A quick learner and problem-solving enthusiast, I am eager to tackle novel challenges with a blend of creativity and strategic thinking. Driven by a passion to create impactful websites that elevate businesses and organizations toward their aspirations.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src="/images/profile/profile-pic-1.png" // MODIFIED: Use root-relative path
                alt="Muideen Akinroye"
                // IMPORTANT: Add the actual width and height of your profile-pic-1.png
                width={700} // EXAMPLE: Replace with actual intrinsic width
                height={700} // EXAMPLE: Replace with actual intrinsic height
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-center justify-start xl:col-span-8 xl:flex-row xl:items-center xl:justify-around md:order-3"> {/* Adjusted for better layout on xl screens */}
              {stats.map(({ id, value, name }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center my-4 xl:my-0" // Adjusted margin for consistency
                >
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"> {/* Used span for number, responsive text */}
                    <AnimateNumbers value={value} />+
                  </span>
                  <h2 className="text-xl font-medium text-center capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {name}
                  </h2>
                </div>
              ))}
              {/* Moved Link outside the map for clarity if it's a single link, or adjust if it's per stat */}
              <Link href="/projects" className="flex items-center bg-dark text-light mt-5 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base xl:mt-0" >View Projects </Link>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About; // Changed to About