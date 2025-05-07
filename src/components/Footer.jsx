import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light sm:text-base select-text">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span style={{fontFamily: "'Montserrat', sans-serif;"}}>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className="flex items-center lg:py-2" style={{fontFamily: "'Montserrat', sans-serif;"}}>
          Developed
          
          by &nbsp;
          <Link style={{fontFamily: "'Montserrat', sans-serif;"}}
            href="https://muideenakinroye.vercel.app"
            className="underline underline-offset-4 decoration-wavy decoration-indigo-400 hover:decoration-indigo-500"
            target={"_blank"}
          >Muideen Akinroye
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
