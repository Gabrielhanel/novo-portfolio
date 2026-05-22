import React from 'react';
import styles from "./computer-science.module.css";

export default function ComputerScience() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.titulo}>FORMAÇÃO ACADÊMICA</h1>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.curso}>Ciência da Computação (Bacharelado)</h3>
              <h4 className={styles.instituicao}>ATITUS</h4>
            </div>
            <div className={styles.badgesContainer}>
              <span className={styles.statusBadge}>Em andamento</span>
              <span className={styles.periodo}>Previsão: Dez/2027</span>
            </div>
          </div>
          
          <p className={styles.descricao}>
            Durante a graduação, construí uma base sólida em desenvolvimento de software, 
            arquitetura de sistemas e boas práticas de código. Atualmente, aplico e aprofundo 
            esses conhecimentos na área de Quality Assurance (QA) e Automação de Testes.
          </p>
        </div>
      </div>
    </div>
  );
}