import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const ProjectsCarousel = () => (
  <Swiper
    modules={[Navigation, Keyboard, Mousewheel]}
    navigation
    mousewheel
    keyboard
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    }}
    loop
  >
    <SwiperSlide>Card 1</SwiperSlide>
    <SwiperSlide>Card 2</SwiperSlide>
    <SwiperSlide>Card 3</SwiperSlide>
    <SwiperSlide>Card 4</SwiperSlide>
  </Swiper>
);
