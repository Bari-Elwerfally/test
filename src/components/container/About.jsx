import React from "react";
import iot from "../../assets/iot.png";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className=" border-Red rounded-lg">
          <img src={iot} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Who Are 
            <span className="text-Red"> We</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          At Misbar, we’re pioneers in harnessing the power of artificial intelligence, Internet of Things (IoT), and cloud technologies. Our innovative solutions redefine how businesses learn, grow, and thrive. From intelligent automation to secure data management, we’re committed to shaping a smarter, safer future. Join us on this transformative journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
