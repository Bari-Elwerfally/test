import React from "react";
import vutility from "../../assets/vutility.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
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
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div className="md:w-1/2 md:pr-4">
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Connecting Intelligence
            <br />
            Empowering Tomorrow
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            At Misbar, we bridge the gap between data and transformation. Our
            AI-driven solutions unlock new possibilities, empowering businesses
            to thrive in a connected world. Welcome to the future, where
            intelligence shapes tomorrow
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={vutility} alt="" className="mx-auto md:mx-0" />
        </div>
      </div>

      <div>
        <p className="text-center text-xl">
          We're proud to partner with{" "}
          <span className="text-Red">eight top-tier companies</span>, driving
          innovation and delivering exceptional solutions together.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div
              variants={item}
              className="w-24 h-24 flex items-center justify-center"
              key={index}
            >
              <img src={logo} alt="" className="object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
