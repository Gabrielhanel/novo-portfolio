import React from "react";
import styles from "../../../pages/Courses/Certificates/certificates.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Definindo a interface das propriedades que o carrossel vai receber
interface Certificado {
  id: string;
  img: string;
  alt: string;
  text: string;
}

interface CarouselProps {
  certificados: Certificado[];
}

export const CertificatesCarousel = ({ certificados }: CarouselProps) => (
  <Swiper
    modules={[Navigation, Keyboard]}
    navigation
    keyboard
    loop={false}
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: true },
      768: { slidesPerView: 1, spaceBetween: 15, centeredSlides: true },
      1024: { slidesPerView: "auto", spaceBetween: 20 },
    }}
  >
    {certificados.map((cert) => (
      <SwiperSlide key={cert.id}>
        <img src={cert.img} alt={cert.alt} className={styles.imgCertificado} />
        <p className={styles.texto}>{cert.text}</p>
      </SwiperSlide>
    ))}
  </Swiper>
);