import React from "react";
import { categories } from "../../../Data";
import Categories from "./ServiceCategories";
import { motion } from "framer-motion";

const Services = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="services">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our  <span className="text-Red">Services</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
        At Misbar, we specialize in cutting-edge solutions that bridge the gap between technology and real-world impact. Our services encompass AI-driven innovations, IoT solutions, and safety systems such as fire alarms and oil and gas solutions. Whether it’s optimizing processes, enhancing security, or transforming industries, we’re committed to shaping a smarter, safer future.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-5 sm:grid-cols-3 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>

    </div>
  );
};

export default Services;
