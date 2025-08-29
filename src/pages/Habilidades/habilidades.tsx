import htmlImage from "../../assets/icons/html.png";
import cssImage from "../../assets/icons/css.png";
import jsImage from "../../assets/icons/javascript.png";
import reactImage from "../../assets/icons/react.png";
import tsImage from "../../assets/icons/typescript.png";
import reactNativeImage from "../../assets/icons/react-native.png";
import gitImage from "../../assets/icons/git.png";
import javaImage from "../../assets/icons/java.png";
import postgresql from "../../assets/icons/postgres.png";

import styles from "./habilidades.module.css";

export default function Habilidades() {
  return (
    <div className={styles.container}>
      <div className="areaTitulo">
        <h1 className="titulo">HABILIDADES</h1>
      </div>

      <h2 className={styles.subTitulo}>FRONT END</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1120px",
        }}
      >
        <div className={styles.cards}>
          <div className={styles.cardHabilidades}>
            <img src={htmlImage} alt="Logo HTML" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>HTML</span>
          </div>

          <div className={styles.cardHabilidades}>
            <img src={cssImage} alt="Logo CSS" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>CSS</span>
          </div>

          <div className={styles.cardHabilidades}>
            <img src={jsImage} alt="Logo Javascript" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>JAVASCRIPT</span>
          </div>

          <div className={styles.cardHabilidades}>
            <img src={tsImage} alt="Logo Typescript" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>TYPESCRIPT</span>
          </div>

          <div className={styles.cardHabilidades}>
            <img src={reactImage} alt="Logo React" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>REACT</span>
          </div>

          <div className={styles.cardHabilidades}>
            <img src={reactNativeImage} alt="Logo React Native" className={styles.imgHabilidades} />
          </div>
        </div>
      </div>

      <h2 className={styles.subTitulo}>OUTROS</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1120px",
        }}
      >
        <div className={styles.cards}>
          <div className={styles.cardHabilidades}>
            <img src={javaImage} alt="Logo Java" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>JAVA</span>
          </div>

          <div className={styles.cardHabilidades}>
            <img src={postgresql} alt="Logo Postgresql" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>POSTGRESQL</span>
          </div>

          <div className={styles.cardHabilidades}>
            <img src={gitImage} alt="Logo Git" className={styles.imgHabilidades} />
            <span className={styles.textHabilidades}>GIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
