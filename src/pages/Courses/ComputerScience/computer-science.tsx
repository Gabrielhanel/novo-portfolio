import styles from "./computer-science.module.css";

export default function ComputerScience() {
  return (
    <div className={styles.container}>
      <div className="areaTitulo">
        <h1 className="titulo">FORMAÇÃO ACADÊMICA</h1>
      </div>
      <div>
        <p className={styles.textoFormacaoAcademica}>
          (Em andamento) Bacharelado em Ciências da Computação – Atitus
          (Previsão de conclusão em 12/2027)
        </p>
      </div>
    </div>
  );
}
