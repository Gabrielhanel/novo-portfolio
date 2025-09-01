import React from "react";
import styles from "../../../pages/Designs/design.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import imagemAppFred from "../../../assets/images/tela-appfred.png";
import imagemSiteFoco from "../../../assets/images/tela-sitefoco.png";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export const DesignsCarousel = () => (
  <Swiper
    modules={[Navigation, Keyboard]}
    navigation
    loop={false} // evita bug quando tem menos slides que o necessário
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: "auto", spaceBetween: 20 },
    }}
    keyboard
  >
    <SwiperSlide>
      <img
        src={imagemSiteFoco}
        alt="Site da Foco Cartuchos"
        className={styles.imgSiteFoco}
      />
      <p className={styles.texto}>Redesign - Site da Foco Cartuchos</p>
      <a href="https://www.figma.com/design/yGmb0F2tbhr9XXXOWPO1xH/Site-foco?node-id=0-1&t=nhI0edbYpKwmjfnL-1" className={styles.textoLink} target="_blank" rel="noopener noreferrer">
        <div className={styles.link}>FIGMA</div>
      </a>
    </SwiperSlide>

    <SwiperSlide>
      <img
        src={imagemAppFred}
        alt="Aplicativo Pão do Fred"
        className={styles.imgAppFred}
      />
      <p className={styles.texto}>Design - Aplicativo Pão do Fred</p>
      <a href="https://www.figma.com/design/DuaGNSOMfqVHkvaWFQ9ap0/app-fred?node-id=0-1&m=dev" className={styles.textoLink} target="_blank"
      rel="noopener noreferrer">
        <div className={styles.link}>FIGMA</div>
      </a>
    </SwiperSlide>
  </Swiper>
);
