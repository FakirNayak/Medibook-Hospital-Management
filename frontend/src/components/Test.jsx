import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { title: "Orthopaedics and spinal care", image: s1 },
  { title: "Women's health", image: s2 },
  { title: "Neurosciences", image: s3 },
  { title: "Cardiology", image: s4 },
  { title: "Oncology", image: s5 },
  { title: "Paediatrics", image: s6 },
];

// Container animation for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const underlineVariants = {
  rest: { width: 0 },
  hover: {
    width: "100%",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const SpecialisedCare = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#fbe1b6] min-h-screen">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:sticky lg:top-0 h-fit bg-[#fbe1b6] z-10 relative">
        <h4 className="text-sm text-gray-700 uppercase tracking-wide mb-4">
          Our Service Department
        </h4>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0a2342] mb-6 leading-tight">
          Access specialised care
        </h1>
        <p className="text-base lg:text-lg text-gray-800 mb-8 max-w-xl">
          We provide expert care in every medical specialty, addressing a wide
          spectrum of health conditions — even the rarest. Our specialists work
          together in multidisciplinary teams to exchange insights and deliver
          comprehensive, personalized treatment solutions.
        </p>
        <Link to="/doctors">
          <button className="px-6 py-3 border border-[#0a2342] text-[#0a2342] rounded-full font-medium hover:bg-[#0a2342] hover:text-white transition">
            🔍 Search all <strong className="ml-1">departments</strong>
          </button>
        </Link>
      </div>

      {/* Right Side with Grid Animation */}
      <motion.div
        className="w-full lg:w-1/2 px-4 py-8 pr-6 z-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg h-72 cursor-default group"
              variants={cardVariants}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              {/* Text content */}
              <div className="absolute bottom-4 left-4 text-white z-20">
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <motion.div
                  className="mt-2"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <p className="text-sm">Learn more</p>
                  <motion.div
                    className="h-[2px] bg-white mt-1"
                    variants={underlineVariants}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SpecialisedCare;
