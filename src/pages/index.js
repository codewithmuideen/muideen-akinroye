import { useEffect } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic.PNG";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    // Dynamically load the Tawk.to script
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/66facd0de5982d6c7bb6b1c4/1i91r1v98";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Muideen Akinroye | Home</title>
        <meta
          name="description"
          content="Explore the professional web development and software engineering services offered by Muideen Akinroye — crafting high-performance, user-focused websites and applications that drive results."
        />
        {/* <link rel="shortcut icon" href="../../public/favicon.ico"/> */}
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen pt-16 mt-12 text-dark">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-center w-full lg:flex-col">
            <div className="items-center justify-center w-1/2 mb-4 mr-8 md:m-0 md:w-full">
              <Image
                src={profilePic}
                alt="Muideen Akinroye"
                className="items-center w-full h-auto lg:hidden md:flex md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw object-fit"
              />
            </div>
            <div className="flex flex-col text-center items-center w-1/2 lg:w-full lg:text-center">
              <h1
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="font-bold text-center justify-center items-center !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              >
                <Typewriter
                  words={[
                    'Turning Vision Into Reality With Code And Design.',
                    'Passionate Frontend Web Developer',
                    'Passionate Software Engineer'
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
                className="my-4 !text-left self-center text-base font-medium md:text-sm sm:text-xs"
              >
                I&#39;m a passionate front-end web developer, blending creativity and technology to craft stunning websites that feel like they&#39;re from another dimension. Explore my projects to see how I harness the power of technologies to give better user experiences that are truly out of this world! Let&#39;s turn ideas into reality, one pixel at a time!
              </p>
              <div className="flex flex-wrap items-center self-start mt-2 md:flex-col md:gap-2 lg:self-center">
                <Link
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  href="/My_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base"
                  download
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* Tawk.to will automatically show the chat widget */}

        <HireMe />
      </main>
    </>
  );
};

export default Home;
