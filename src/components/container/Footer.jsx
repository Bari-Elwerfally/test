// Footer.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Misbar from "../../assets/Misbar_white.png";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }, 100); // add a delay of 100 milliseconds
  };

  return (
    <div className="bg-Red p-10">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-center gap-8 text-white">
        {/* Get Started Section */}
        <div className="col-span-1 flex flex-col justify-between items-center h-full">
          <img src={Misbar} alt="" className="w-auto h-8" />
          <p className="text-sm leading-4">
            © {new Date().getFullYear()} Misbar Altaqnia. All rights reserved.
          </p>
        </div>

        {/* Misbar Section */}
        <div>
          <div className="font-bold mb-6">Misbar</div>
          <div className="flex flex-col gap-4">
            <div
              onClick={() => handleClick("home")}
              className="text-sm hover:underline cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={() => handleClick("about")}
              className="text-sm hover:underline cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => handleClick("services")}
              className="text-sm hover:underline cursor-pointer"
            >
              Services
            </div>
            <div
              onClick={() => handleClick("questions")}
              className="text-sm hover:underline cursor-pointer"
            >
              Questions
            </div>
            <div
              onClick={() => handleClick("contact")}
              className="text-sm hover:underline cursor-pointer"
            >
              Contact
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <Link
              to="/service-categories/AI solutions"
              className="text-sm hover:underline"
            >
              AI solutions
            </Link>
            <Link
              to="/service-categories/IoT Solutions"
              className="text-sm hover:underline"
            >
              IoT Solutions
            </Link>
            <Link
              to="/service-categories/AI Cloud Solutions"
              className="text-sm hover:underline"
            >
              AI Cloud Solutions
            </Link>
            <Link
              to="/service-categories/AI OT Security"
              className="text-sm hover:underline"
            >
              AI OT Security
            </Link>
            <Link
              to="/service-categories/Fire Alarm Oil & Gas"
              className="text-sm hover:underline"
            >
              Fire Alarm Oil & Gas
            </Link>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="col-span-1 flex flex-col justify-between items-center h-full">
          <div className="flex flex-col gap-4">
            <div className="font-bold mb-6">Follow us</div>
            <div className="text-sm mb-4">info@misbar.ly</div>
            <div className="text-sm">+218914567527</div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/misbar-altaqnia/"
                className="hover:scale-110 text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
