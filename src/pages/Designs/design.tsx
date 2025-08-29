import styles from "./design.module.css";
import imagemSiteFoco from "../../../src/assets/images/tela-sitefoco.png";
import imagemAppFred from "../../../src/assets/images/tela-appfred.png";

export default function Design() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div className="areaTitulo">
        <h1 className="titulo">
          DESIGNS E <br /> PROTÓTIPOS
        </h1>
      </div>

      <div className={styles.areaDesign}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={imagemSiteFoco}
            alt="Site da Foco Cartuchos"
            className={styles.imgSiteFoco}
          />
          <br />
          <p className={styles.texto}>Redesign - Site da Foco Cartuchos</p>
          <div className={styles.link}>
            <a href="" className={styles.textoLink}>
              FIGMA
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5vh",
          }}
        >
          <img
            src={imagemAppFred}
            alt="Aplicativo Pão do Fred"
            className={styles.imgAppFred}
          />
          <br />
          <p className={styles.texto}>Design - Aplicativo Pão do Fred</p>
          <div className={styles.link}>
            <a href="" className={styles.textoLink}>
              FIGMA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
