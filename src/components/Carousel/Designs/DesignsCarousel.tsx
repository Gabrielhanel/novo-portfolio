import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const DesignsCarousel = () => (
  <Swiper modules={[Navigation]}
    navigation
    slidesPerView={3}
    spaceBetween={20}
    loop>
    <SwiperSlide>
      <div><h1>sla</h1></div>
      </SwiperSlide>
    <SwiperSlide>Card 2</SwiperSlide>
    <SwiperSlide>Card 3</SwiperSlide>
  </Swiper>
);