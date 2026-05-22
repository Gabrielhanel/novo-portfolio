import React, { useState } from "react";
import htmlImage from "../../assets/icons/html.png";
import cssImage from "../../assets/icons/css.png";
import jsImage from "../../assets/icons/javascript.png";
import reactImage from "../../assets/icons/react.png";
import tsImage from "../../assets/icons/typescript.png";
import reactNativeImage from "../../assets/icons/react-native.png";
import gitImage from "../../assets/icons/git.png";
import javaImage from "../../assets/icons/java.png";
import postgresql from "../../assets/icons/postgres.png";
import seleniumImage from "../../assets/icons/seleniumImage.png"; 

import styles from "./habilidades.module.css";

// Criando listas de habilidades
const qaSkills = [
  { id: 'java', name: 'JAVA', img: javaImage, alt: 'Logo Java' },
  { id: 'selenium', name: 'SELENIUM', img: seleniumImage, alt: 'Logo Selenium' },
];

const frontSkills = [
  { id: 'html', name: 'HTML', img: htmlImage, alt: 'Logo HTML' },
  { id: 'css', name: 'CSS', img: cssImage, alt: 'Logo CSS' },
  { id: 'js', name: 'JAVASCRIPT', img: jsImage, alt: 'Logo Javascript' },
  { id: 'ts', name: 'TYPESCRIPT', img: tsImage, alt: 'Logo Typescript' },
  { id: 'react', name: 'REACT', img: reactImage, alt: 'Logo React' },
  { id: 'reactNative', name: 'REACT NATIVE', img: reactNativeImage, alt: 'Logo React Native' },
];

const otherSkills = [
  { id: 'postgres', name: 'POSTGRESQL', img: postgresql, alt: 'Logo Postgresql' },
  { id: 'git', name: 'GIT', img: gitImage, alt: 'Logo Git' },
];

export default function Habilidades() {
  // Estado para controlar qual aba está ativa. Começa com 'qa'
  const [abaAtiva, setAbaAtiva] = useState('qa');

  // Lógica atualizada para escolher a lista certa dependendo da aba
  let habilidadesAtuais = qaSkills;
  if (abaAtiva === 'front') {
    habilidadesAtuais = frontSkills;
  } else if (abaAtiva === 'outros') {
    habilidadesAtuais = otherSkills;
  }

  return (
    <div className={styles.container}>
      <div className={styles.areaTitulo}>
        <h1 className={styles.titulo}>HABILIDADES</h1>
      </div>

      {/* ÁREA DE BOTÕES (TÓPICOS) */}
      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tabButton} ${abaAtiva === 'qa' ? styles.tabActive : ''}`}
          onClick={() => setAbaAtiva('qa')}
        >
          QA
        </button>
        <button 
          className={`${styles.tabButton} ${abaAtiva === 'front' ? styles.tabActive : ''}`}
          onClick={() => setAbaAtiva('front')}
        >
          FRONT-END & MOBILE
        </button>
        {/* Botão OUTROS corrigido */}
        <button 
          className={`${styles.tabButton} ${abaAtiva === 'outros' ? styles.tabActive : ''}`}
          onClick={() => setAbaAtiva('outros')}
        >
          OUTROS
        </button>
      </div>

      {/* ÁREA DOS CARDS DINÂMICA */}
      <div className={styles.gridContainer}>
        <div className={styles.cards}>
          {habilidadesAtuais.map((skill) => (
            <div key={skill.id} className={styles.cardHabilidades}>
              <img src={skill.img} alt={skill.alt} className={styles.imgHabilidades} />
              <span className={styles.textHabilidades}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}