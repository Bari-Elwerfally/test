import { CgSmartHomeLight } from "react-icons/cg";
import { TbCloudComputing } from "react-icons/tb";
import { BiCctv } from "react-icons/bi";
import { GiOilPump } from "react-icons/gi";
import { SiProbot } from "react-icons/si";

import logo1 from "./assets/Dell.png";
import logo2 from "./assets/Axis.png";
import logo3 from "./assets/Bosch.png";
import logo4 from "./assets/Came.png";
import logo5 from "./assets/Honeywell.png";
import logo6 from "./assets/Milestone.png";
import logo7 from "./assets/VuWall.png";
import logo8 from "./assets/Winsted.png";

import Predictive_maintenance from "./assets/Predictive_maintenance.png";
import Qc from "./assets/Qc.png";
import Process_opt from "./assets/Process_opt.png";
import Safety from "./assets/Safety.png";
import Cyber_security from "./assets/Cyber_security.png";
import Device_development from "./assets/Device_development.png";
import Solution_engineering from "./assets/Solution_engineering.png";
import System_integration from "./assets/System_integration.png";
import Data_analysis from "./assets/Data_analysis.png";
import Network_connectivity from "./assets/Network_connectivity.png";
import Security_implementation from "./assets/Security_implementation.png";
import Technical_support from "./assets/Technical_support.png";
import Supply_chain from "./assets/Supply_chain.png";
import Ai_and_machine_learning from "./assets/Ai_and_machine_learning.png";
import Iot_solutions from "./assets/Iot_solutions.png";
import Digital_twins from "./assets/Digital_twins.png";
import Access_control from "./assets/Access_control.png";
import Cctv from "./assets/Cctv.png";
import Intrusion_detection from "./assets/Intrusion_detection.png";
import Fire_alarm_safety from "./assets/Fire_alarm_safety_in_oil_&_gas_operations.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "services",
    link: "Services",
  },
  {
    id: 4,
    href: "questions",
    link: "Questions",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <SiProbot />,
    category: "AI solutions",
  },
  {
    id: 2,
    icon: <CgSmartHomeLight />,
    category: "IoT Solutions",
  },
  {
    id: 3,
    icon: <TbCloudComputing />,
    category: "AI Cloud Solutions",
  },
  {
    id: 4,
    icon: <BiCctv />,
    category: "AI OT Security",
  },
  {
    id: 5,
    icon: <GiOilPump />,
    category: "Fire Alarm Oil & Gas",
  },
];

export const categoryDetails = {
  "AI solutions": [
    {
      title: "Predictive Maintenance",
      description:
        "Our AI algorithms analyze data from machinery and equipment to predict potential failures before they occur. This proactive approach allows for timely maintenance, reducing downtime and increasing operational efficiency. By identifying patterns and anomalies in the data, we can forecast issues and prevent costly repairs or replacements.",
      image: Predictive_maintenance,
    },
    {
      title: "Quality Control",
      description:
        "We implement machine vision systems to inspect and ensure product quality during manufacturing processes. Our AI-driven quality control systems can detect defects and irregularities that might be missed by human inspection, ensuring that only products meeting the highest standards reach our customers. This results in improved customer satisfaction and reduced returns or recalls.",
      image: Qc,
    },
    {
      title: "Process Optimization",
      description:
        "Our AI analyzes operational data to optimize energy usage, reduce waste, and improve overall efficiency. By identifying inefficiencies and suggesting improvements, we can streamline operations and reduce costs. This not only leads to increased profitability, but also contributes to sustainability by minimizing waste and reducing energy consumption.",
      image: Process_opt,
    },
    {
      title: "Safety Monitoring",
      description:
        "We deploy AI-powered surveillance systems to monitor for safety hazards and ensure compliance with regulations. Our systems can detect potential risks in real-time, allowing for immediate action to prevent accidents. This creates a safer work environment and helps to ensure compliance with health and safety regulations.",
      image: Safety,
    },
    {
      title: "Cybersecurity",
      description:
        "We enhance security measures with AI-driven threat detection and response systems to protect against cyber threats. Our systems continuously monitor for suspicious activity and can respond to threats in real-time, minimizing the risk of data breaches and ensuring the integrity and confidentiality of your data.",
      image: Cyber_security,
    },
    {
      title: "Supply Chain Management",
      description:
        "We apply AI to forecast demand, manage inventory, and streamline logistics. Our systems can predict market trends, optimize inventory levels, and improve delivery efficiency. This results in reduced costs, improved customer service, and increased competitiveness in the market.",
      image: Supply_chain,
    },
  ],

  "IoT Solutions": [
    {
      title: "Device Development",
      description:
        "We specialize in creating and developing devices, sensors, and software tailored for IoT applications. Our team of experts designs IoT devices that are robust, reliable, and capable of collecting accurate data for various applications. These devices are integral to the IoT ecosystem and play a crucial role in data collection, communication, and control.",
      image: Device_development,
    },
    {
      title: "Solution Engineering",
      description:
        "Our team is skilled in researching, creating, testing, and documenting comprehensive IoT solutions. We work closely with our clients to understand their needs and engineer solutions that meet those needs. Our solutions are designed to be scalable, reliable, and efficient, ensuring they can handle the demands of modern IoT applications.",
      image: Solution_engineering,
    },
    {
      title: "System Integration",
      description:
        "We excel in designing and integrating various hardware and software components to create cohesive IoT systems. Our system integration services ensure that all components of the IoT system work together seamlessly. This includes ensuring compatibility between devices, connectivity solutions, and software platforms.",
      image: System_integration,
    },
    {
      title: "Data Analysis",
      description:
        "We provide data analysis services to help businesses make sense of the vast amounts of data collected from sensors and devices. Our data analysis techniques can uncover patterns and trends in the data, providing valuable insights that can be used to improve system performance, operational efficiency, and business decision-making.",
      image: Data_analysis,
    },
    {
      title: "Network Connectivity",
      description:
        "Our team provides solutions to issues related to the connection of networks and platforms, ensuring seamless communication between devices. We understand the importance of reliable network connectivity in an IoT system and work to ensure that devices can communicate effectively, regardless of their location.",
      image: Network_connectivity,
    },
    {
      title: "Security Implementation",
      description:
        "We prioritize security in all our IoT solutions. Our team implements robust security measures to protect IoT networks and data from cyber threats. We use advanced encryption techniques, secure data transmission protocols, and continuous monitoring to ensure the security and integrity of our IoT systems.",
      image: Security_implementation,
    },
    {
      title: "Technical Support",
      description:
        "We offer comprehensive technical support and troubleshooting for IoT systems. Our support team is available to assist with any issues that may arise, ensuring the smooth operation of your IoT systems. We provide timely and effective support to minimize downtime and keep your IoT systems running at peak performance.",
      image: Technical_support,
    },
  ],

  "AI Cloud Solutions": [
    {
      title: "AI and Machine Learning",
      description:
        "Utilize services like AWS SageMaker for building, training, and deploying machine learning models at scale. Azure: Leverage Azure Machine Learning for a wide range of machine learning services from model creation to deployment.",
      image: Ai_and_machine_learning,
    },
    {
      title: "IoT Solutions",
      description:
        "Implement AWS IoT Core to connect devices easily and securely, and AWS IoT Analytics for advanced data analysis. Azure: Use Azure IoT Hub for device management and Azure IoT Central for IoT app development.",
      image: Iot_solutions,
    },
    {
      title: "Predictive Maintenance",
      description:
        "Apply AWS IoT SiteWise for collecting data from industrial equipment, and AWS IoT TwinMaker for creating digital twins to predict maintenance needs. Azure: Integrate Azure IoT solutions with Azure Machine Learning for predictive insights on equipment health.",
      image: Predictive_maintenance,
    },
    {
      title: "Digital Twins",
      description:
        "Create digital replicas of physical systems with AWS IoT TwinMaker, which helps in optimizing operations and improving agility. Azure: Develop comprehensive digital models with Azure Digital Twins to simulate and analyze physical environments.",
      image: Digital_twins,
    },
    // ...more AI Cloud solutions
  ],
  "AI OT Security": [
    {
      title: "Access Control",
      description:
        "AI  access control systems by introducing biometric authentication, facial recognition, and behavioral analysis. These features ensure that only authorized individuals gain entry, and any unusual attempts are quickly identified and addressed.",
      image: Access_control,
    },
    {
      title: "CCTV Surveillance",
      description:
        "	Our CCTV systems are empowered with AI-driven video analytics. This technology enables proactive security measures, such as real-time threat detection and automated alerts, making surveillance more effective than ever.",
      image: Cctv,
    },
    {
      title: "Intrusion Detection",
      description:
        "	AI algorithms are utilized to monitor and analyze video streams from CCTV cameras, providing advanced intrusion detection capabilities. This allows for the immediate recognition of any unauthorized access, ensuring swift response to potential security breaches.",
      image: Intrusion_detection,
    }, // ...more AI Cloud solutions
  ],
  "Fire Alarm Oil & Gas": [
    {
      title: "Access Control",
      description:
        "In the high-risk oil and gas industry, our fire alarm systems are key to our OT security strategy. They swiftly detect and respond to fire hazards, safeguarding personnel and facilities. Our systems use advanced heat, flame, and gas detectors for comprehensive hazard recognition. We partner with NOTIFIER by Honeywell for cutting-edge fire alarm systems and safety solutions. Honeywell’s acquisition of SCAME Sistemi, a leader in the oil and gas industry, enhances our safety standards with their UL, SIL2, and SIL3 certified products.",
      image: Fire_alarm_safety,
    },
  ],

  // ...more categories
};

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export const accordions = [
  {
    id: 1,
    title: "What Industries Do You Serve ?",
    content:
      "At Misbar, we cater to a diverse range of industries. Our solutions span manufacturing, healthcare, energy, transportation, and more. Whether you’re in oil and gas, retail, or smart cities, we have tailored services to meet your needs.",
  },
  {
    id: 2,
    title: "How Can AI and IoT Benefit My Business ?",
    content:
      "AI and IoT offer transformative benefits. AI enhances decision-making, automates processes, and predicts trends. IoT connects devices, enabling real-time data collection and insights. Together, they optimize operations, improve efficiency, and drive innovation.",
  },
  {
    id: 3,
    title: "What Sets Misbar Apart ?",
    content:
      "Our commitment to innovation and excellence sets us apart. We blend cutting-edge technologies with practical applications. Our team’s expertise, customer-centric approach, and focus on safety ensure that our solutions deliver tangible results.",
  },
  {
    id: 4,
    title: "How Can I Get Started ?",
    content:
      "Getting started with Misbar is easy! Reach out to our team for a consultation. We’ll assess your needs, discuss customized solutions, and guide you through implementation. Let’s embark on a journey toward smarter, safer futures together!",
  },
];
