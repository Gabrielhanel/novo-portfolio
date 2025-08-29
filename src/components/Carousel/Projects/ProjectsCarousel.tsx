import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const ProjectsCarousel = () => (
  <Swiper modules={[Navigation]}
    navigation
    slidesPerView={3}
    spaceBetween={20}
    loop>
    <SwiperSlide>
      Card 1
      </SwiperSlide>
    <SwiperSlide>Card 2</SwiperSlide>
    <SwiperSlide>Card 3</SwiperSlide>
    <SwiperSlide>Card 4</SwiperSlide>
  </Swiper>
);