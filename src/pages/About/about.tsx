import styles from "./about.module.css";
import myPhoto from "../../assets/images/minha-foto.png";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.titulo}>QUEM SOU EU?</h1>

        <div className={styles.content}>
          {/* Coluna da Esquerda: Foto e Botão */}
          <div className={styles.imageColumn}>
            <img src={myPhoto} alt="Foto de Gabriel Hanel" className={styles.imgMinhaFoto} />

            <a href="/docs/Curriculo.pdf" className={styles.botao} target="_blank" rel="noopener noreferrer">
              <span>BAIXAR CV</span>
            </a>
          </div>

          {/* Coluna da Direita: Textos (INTOCADOS) */}
          <div className={styles.textColumn}>
            <p className={styles.texto}>
              Olá! Meu nome é Gabriel Hanel, tenho 20 anos e atualmente sou QA. Minha jornada no mundo da tecnologia começou no início de 2024, quando ingressei no curso de Ciências da Computação na ATITUS, onde atualmente curso o quinto semestre.
            </p>

            <p className={styles.texto}>
              Em minha vida acadêmica, construí uma base sólida em desenvolvimento web e mobile, especialmente com o React Native, além de adquirir experiências com outras áreas, como cibersegurança, banco de dados, hardware e UX/UI . No inicio de 2026, iniciei minha carreira profissional, atuando na Spread como QA, desenvolvendo uma base sólida de automação e testes com o framework Selenium e a linguagem Java. Além disso, possuo experiência com as praticas de Kanban. 
            </p>

            <p className={styles.texto}>
              Sou autodidata e acredito que através da tecnologia, podemos construir um mundo muito melhor. Em minha experiência como QA, descobri o quão importante é essa profissão visando principalmente prevenção de erros, mas também o quão importante é a comunicação no mundo profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}