import React from "react";
import CertificadoFullStack from "../../../assets/images/certificado-devFullStack.webp";
import CertificadoAplicacoesJr from "../../../assets/images/certificado-devAplicacoesJr.webp"
import styles from "../../../pages/Courses/Certificates/certificates.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export const CertificatesCarousel = () => (
<Swiper
  modules={[Navigation, Keyboard]}
    navigation
    keyboard
  loop={false} // evita bug quando tem menos slides que o necessário
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: true },
    768: { slidesPerView: 1, spaceBetween: 15, centeredSlides: true },
    1024: { slidesPerView: "auto", spaceBetween: 20 },
  }}
>
  <SwiperSlide>
    <img src={CertificadoFullStack} alt="Certificado da ATITUS de Desenvolvimento FullStack" className={styles.imgCertificado} />
    <p className={styles.texto}>Desenvolvimento de Soluções Full Stack – ATITUS (400h, 2024)</p>
  </SwiperSlide>

  <SwiperSlide >
    <img src={CertificadoAplicacoesJr} alt="Certificado da ATITUS de Desenvolvimento de Aplicações Júnior" className={styles.imgCertificado} />
    <p className={styles.texto}>Desenvolvimento de Aplicações Júnior – ATITUS (400h, 2024)</p>
  </SwiperSlide>
</Swiper>
);
