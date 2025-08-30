import React from "react";
import styles from "../../../pages/Designs/design.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import imagemAppFred from "../../../assets/images/tela-appfred.png";
import imagemSiteFoco from "../../../assets/images/tela-sitefoco.png";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export const DesignsCarousel = () => (
<Swiper
  modules={[Navigation]}
    navigation
  loop={false} // evita bug quando tem menos slides que o necessário
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: "auto", spaceBetween: 20 },
  }}
>
  <SwiperSlide>
    <img
      src={imagemSiteFoco}
      alt="Site da Foco Cartuchos"
      className={styles.imgSiteFoco}
    />
    <p className={styles.texto}>Redesign - Site da Foco Cartuchos</p>
    <div className={styles.link}>
      <a href="#" className={styles.textoLink}>
        FIGMA
      </a>
    </div>
  </SwiperSlide>

  <SwiperSlide >
    <img
      src={imagemAppFred}
      alt="Aplicativo Pão do Fred"
      className={styles.imgAppFred}
    />
    <p className={styles.texto}>Design - Aplicativo Pão do Fred</p>
    <div className={styles.link}>
      <a href="#" className={styles.textoLink}>
        FIGMA
      </a>
    </div>
  </SwiperSlide>
</Swiper>
);
