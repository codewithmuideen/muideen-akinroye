// Remove this import, we'll use a string path
// import profilePic from "../../public/images/profile/profile-pic.png";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image"; // Keep this import
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

    // Optional: Cleanup script on component unmount
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
        {/* <link rel="shortcut icon" href="/favicon.ico"/>  Correct way if favicon is in public folder */}
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen pt-16 mt-12 text-dark dark:text-light"> {/* Added dark:text-light for dark mode text color consistency */}
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-center w-full lg:flex-col">
            <div className="flex items-center justify-center w-1/2 mb-4 mr-8 md:m-0 md:w-full"> {/* Added flex and justify-center here for better control if needed */}
              <Image
                src="/images/profile/profile-pic.png" // MODIFIED: Use root-relative path
                alt="Muideen Akinroye"
                // IMPORTANT: Add the actual width and height of your profile-pic.png
                width={500} // EXAMPLE: Replace with actual intrinsic width
                height={500} // EXAMPLE: Replace with actual intrinsic height
                className="w-full h-auto object-contain md:object-cover lg:hidden md:inline-block" // MODIFIED: used md:inline-block (or md:block) instead of md:flex, added object-contain/cover
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" // MODIFIED: Removed 'object-fit'
              />
            </div>
            <div className="flex flex-col items-center w-1/2 text-center lg:w-full lg:text-center">
              <h1
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="items-center justify-center font-bold text-center !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
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
                className="self-center my-4 !text-left text-base font-medium md:text-sm sm:text-xs"
              >
                I'm a passionate front-end web developer, blending creativity and technology to craft stunning websites that feel like they're from another dimension. Explore my projects to see how I harness the power of technologies to give better user experiences that are truly out of this world! Let's turn ideas into reality, one pixel at a time!
              </p>
              <div className="flex flex-wrap items-center self-start mt-2 md:flex-col md:gap-2 lg:self-center">
                <Link
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  href="/My_Resume.pdf" // Ensure My_Resume.pdf is in your public folder
                  target="_blank"
                  className="flex items-center p-2.5 px-6 text-lg font-semibold border-2 border-solid rounded-lg bg-dark text-light hover:bg-light hover:text-dark border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light md:p-2 md:px-4 md:text-base" // Added dark mode styles for resume button
                  download
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
};

export default Home;