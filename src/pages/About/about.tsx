import styles from "./about.module.css";
import myPhoto from "../../assets/images/minha-foto.png";

export default function About() {
  return (
    <div style={{ width: "100%", height: "auto"}}>
      <div className="areaTitulo">
        <h1 className="titulo">QUEM SOU EU?</h1>
      </div>
      <div className={styles.areaMinhaFoto}>
        <div style={{ display: "block" }}>
          <img src={myPhoto} className={styles.imgMinhaFoto} />

          <a href="/docs/Curriculo.pdf" className={styles.botao} target="_blank" rel="noopener noreferrer">
            <div className={styles.areaBotao}>
              <span className={styles.textoBotao}>BAIXAR CV</span>
            </div>
          </a>
        </div>

        <div className={styles.areaTexto}>
          <p className={styles.texto}>
            Olá! Meu nome é Gabriel Hanel, tenho 19 anos e atualmente sou
            desenvolvedor front-end. Minha jornada no mundo da programação se
            iniciou no inicio de 2024, quando ingressei no curso de Ciências da
            Computação na ATITUS, onde hoje curso o quarto semestre.
          </p>

          <p className={styles.texto}>
            Desde minha primeira linha de código, venho me apaixonando cada vez
            mais pela programação. Hoje meu foco é no desenvolvimento mobile,
            mais especificamente com React Native.
          </p>

          <p className={styles.texto}>
            Sou movido por desafios e tenho facilidade para aprender novas
            tecnologias. Gosto de transformar ideias em soluções, sempre
            aplicando conceitos de UX/UI e boas práticas de código.
          </p>

          <p className={styles.texto}>
            Acredito que cada linha de código é uma oportunidade de inovar e
            impactar positivamente o mundo ao meu redor.
          </p>
        </div>
      </div>
    </div>
  );
}
