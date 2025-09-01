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
      loop={false} // evita bug quando tem menos slides que o necessário
    keyboard
    breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 10 },
      1024: { slidesPerView: "auto", spaceBetween: 30 },
    }}
  >
    <SwiperSlide className={styles.card}>
      <img src={globalImports} alt="Logo do aplicativo Global Imports" className={styles.LogoDoApp} />
      <p className={styles.descricaoProjetos}>
        Sinta a nostalgia e o poder das máquinas clássicas. Ideal para
        apaixonados por carros!
      </p>
      <LinkButton href="https://www.figma.com/design/i7PeVQSJmY0PN12IEUVdLo/Prot%C3%B3tipo-de-Alta-Fidelidade?node-id=0-1&t=1w1iq8LRB8rw1F4M-1" styleButton="Figma" target="_blank" rel="noopener noreferrer">
        FIGMA
      </LinkButton>
      <br />
      <LinkButton href="https://github.com/Gabrielhanel/globalImports" styleButton="Github" target="_blank" rel="noopener noreferrer" >
        GITHUB
      </LinkButton>
    </SwiperSlide>
    <SwiperSlide className={styles.card}>
      <img src={logoRodometro} alt="Logo do aplicativo Rodometro" className={styles.LogoDoApp}/>
      <p className={styles.descricaoProjetos}>
        Economia e controle na estrada ou no dia a dia. Descubra o quanto seu
        carro gasta de verdade.
      </p>
      <LinkButton href="https://www.figma.com/design/3J8loBnPh568e6xnVIn8zI/Rodometro?node-id=0-1&t=Afc82c9JPlFCHcMi-1" styleButton="Figma" target="_blank" rel="noopener noreferrer">
        FIGMA
      </LinkButton>
      <br />
      <LinkButton href="https://github.com/Gabrielhanel/rodometro" styleButton="Github" target="_blank" rel="noopener noreferrer">
        GITHUB
      </LinkButton>
    </SwiperSlide>
    <SwiperSlide className={styles.card}>
      <img src={appStarWars} alt="Logo do aplicativo Star Wars" className={styles.LogoDoApp} />
      <p className={styles.descricaoProjetos}>
        Explore o universo de Star Wars com facilidade e conforto. Descubra o
        poder da força.
      </p>
      <LinkButton href="https://www.figma.com/design/O1voqMFFVdNqsK3pyMwFyq/Holocron-Archives?node-id=0-1&t=6dZG0UmEV0knJuHS-1" styleButton="Figma" target="_blank" rel="noopener noreferrer">
        FIGMA
      </LinkButton>
      <br />
      <LinkButton href="https://github.com/Gabrielhanel/holocron-archives" styleButton="Github" target="_blank" rel="noopener noreferrer">
        GITHUB
      </LinkButton>
    </SwiperSlide>
  </Swiper>
);
