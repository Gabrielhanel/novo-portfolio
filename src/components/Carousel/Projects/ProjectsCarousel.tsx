import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../../pages/Projetos/projetos.module.css";
import logoRodometro from "../../../assets/images/logo-rodometro.png";
import appStarWars from "../../../assets/images/logo-holocronArchives.png";
import globalImports from "../../../assets/images/logo-GlobalMotors.png";
import { LinkButton } from "../../Button/LinkButton";

export const ProjectsCarousel = () => (
  <Swiper
    modules={[Navigation, Keyboard]}
    navigation
    keyboard
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: "auto", spaceBetween: 30 },
    }}
    loop
  >
    <SwiperSlide className={styles.card}>
      <img src={globalImports} alt="Logo do aplicativo Global Imports" className={styles.LogoDoApp} />
      <p className={styles.descricaoProjetos}>
        Sinta a nostalgia e o poder das máquinas clássicas. Ideal para
        apaixonados por carros!
      </p>
      <LinkButton href="https://github.com/seuusuario" styleButton="Figma">
        FIGMA
      </LinkButton>
      <br />
      <LinkButton href="https://github.com/seuusuario" styleButton="Github">
        GITHUB
      </LinkButton>
    </SwiperSlide>
    <SwiperSlide className={styles.card}>
      <img src={logoRodometro} alt="Logo do aplicativo Rodometro" className={styles.LogoDoApp}/>
      <p className={styles.descricaoProjetos}>
        Economia e controle na estrada ou no dia a dia. Descubra o quanto seu
        carro gasta de verdade.
      </p>
      <LinkButton href="https://github.com/seuusuario" styleButton="Figma">
        FIGMA
      </LinkButton>
      <br />
      <LinkButton href="https://github.com/seuusuario" styleButton="Github">
        GITHUB
      </LinkButton>
    </SwiperSlide>
    <SwiperSlide className={styles.card}>
      <img src={appStarWars} alt="Logo do aplicativo Star Wars" className={styles.LogoDoApp} />
      <p className={styles.descricaoProjetos}>
        Explore o universo de Star Wars com facilidade e conforto. Descubra o
        poder da força.
      </p>
      <LinkButton href="https://github.com/seuusuario" styleButton="Figma">
        FIGMA
      </LinkButton>
      <br />
      <LinkButton href="https://github.com/seuusuario" styleButton="Github">
        GITHUB
      </LinkButton>
    </SwiperSlide>
  </Swiper>
);
