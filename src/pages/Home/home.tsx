import celularesImg from "../../assets/images/celulares.png";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className={styles.areaTagFechamento}>
            <span className={styles.tagFechamento}>{"<" + "/" + ">"}</span>
          </div>
          <a href="#" className={styles.linkTexto}>Sobre</a>
          <a href="#" className={styles.linkTexto}>Projetos</a>
          <a href="#" className={styles.linkTexto}>Habilidades</a>
          <a href="#" className={styles.linkTexto} style={{ marginRight: "7vh" }}>
            Contato
          </a>
        </div>
      </div>

      <div className={styles.areaTitulo}>
        <img
          src={celularesImg}
          alt="Celulares com prints de projetos"
          className={styles.imgCelulares}
        />
        <div className={styles.areaTexto}>
          <h1 className={styles.nome}>GABRIEL HANEL</h1>
          <div style={{ textAlign: "center" }}>
            <p className={styles.profissao}>Desenvolvedor Front-end Web & Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
