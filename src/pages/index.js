import { useEffect } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/66facd0de5982d6c7bb6b1c4/1i91r1v98";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Muideen Akinroye | Home</title>
        <meta
          name="description"
          content="Explore the professional web development and software engineering services offered by Muideen Akinroye — crafting high-performance, user-focused websites and applications that drive results."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center w-full min-h-screen pt-16 mt-12 text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 w-full">
          <div className="flex flex-col items-center justify-center w-full text-center">
            <h1
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="font-bold text-6xl xl:text-5xl lg:text-6xl md:text-5xl sm:text-3xl"
            >
              <Typewriter
                words={[
                  "Turning Vision Into Reality With Code And Design.",
                  "Passionate Frontend Web Developer",
                  "Passionate Software Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="my-6 text-base font-medium leading-relaxed max-w-3xl md:text-sm sm:text-xs"
            >
              I'm a passionate front-end web developer, blending creativity and technology
              to craft stunning websites that feel like they're from another dimension.
              Explore my projects to see how I harness the power of technologies to deliver
              better user experiences that are truly out of this world! Let's turn ideas
              into reality, one pixel at a time!
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Link
                href="/My_Resume.pdf"
                target="_blank"
                className="flex items-center p-2.5 px-6 text-lg font-semibold border-2 border-solid rounded-lg bg-dark text-light hover:bg-light hover:text-dark border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base"
                download
              >
                Resume <LinkArrow className="w-6 ml-2" />
              </Link>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default Home;
