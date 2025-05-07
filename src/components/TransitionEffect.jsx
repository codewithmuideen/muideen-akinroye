import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      {/* Layer 1: Blue Gradient for Main Transition */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-900"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Layer 2: Muted Blue for Soft Blend */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-indigo-800"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Layer 3: Deep Navy for Subtle Depth */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gray-900"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
