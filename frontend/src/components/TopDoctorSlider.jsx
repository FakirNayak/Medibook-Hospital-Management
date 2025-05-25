import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Styles/TopDoctorsty.css";
import hser1 from "../assets/hser.jpg";
import hser2 from "../assets/hser2.jpg";
import hser3 from "../assets/hser3.jpg";
import hser4 from "../assets/hser4.jpg";
import hser5 from "../assets/hser5.png";
import hser6 from "../assets/hser6.jpg";

import { Pagination } from "swiper/modules";
import { motion, useInView } from "framer-motion";

const Card = ({ image, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="card"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <img src={image} alt={`Card ${id}`} />
    </motion.div>
  );
};

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      image: hser1,
    },
    {
      id: 2,
      image: hser2,
    },
    {
      id: 3,
      image: hser3,
    },
    {
      id: 4,
      image: hser4,
    },
    {
      id: 5,
      image: hser5,
    },
    {
      id: 5,
      image: hser6,
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card image={card.image} id={card.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
