import styles from "./design.module.css";
import { DesignsCarousel } from "../../components/Carousel/Designs/DesignsCarousel";

export default function Design() {
  return (
    <div className={styles.container}>
      <div className={styles.areaTitulo}>
        <h1 className={styles.titulo}>
          DESIGNS E <br /> PROTÓTIPOS
        </h1>
      </div>
      <div className={styles.areaDesign}>
        <DesignsCarousel />
      </div>
    </div>
  );
}