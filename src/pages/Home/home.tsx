import React, { useState } from "react";
import celularesImg from "../../assets/images/celulares.png";
import styles from "./home.module.css";

export default function Home() {
  // Estado para controlar o menu mobile
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className={styles.container}>
      
      {/* --- NAVEGAÇÃO SUPERIOR --- */}
      <nav className={styles.navbar}>
        {/* Logo / Tag na Esquerda */}
        <div className={styles.areaTagFechamento}>
          <span className={styles.tagFechamento}>{"</>"}</span>
        </div>

        {/* Botão Hambúrguer (Só aparece no mobile) */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Abrir Menu">
          <span className={`${styles.linha} ${menuAberto ? styles.aberto : ""}`}></span>
          <span className={`${styles.linha} ${menuAberto ? styles.aberto : ""}`}></span>
          <span className={`${styles.linha} ${menuAberto ? styles.aberto : ""}`}></span>
        </button>

        {/* Links na Direita */}
        <div className={`${styles.menuLinks} ${menuAberto ? styles.menuAtivo : ""}`}>
          <a href="#about" className={styles.linkTexto} onClick={() => setMenuAberto(false)}>Sobre</a>
          <a href="#projects" className={styles.linkTexto} onClick={() => setMenuAberto(false)}>Projetos</a>
          <a href="#skills" className={styles.linkTexto} onClick={() => setMenuAberto(false)}>Habilidades</a>
          <a href="#contact" className={styles.linkTexto} onClick={() => setMenuAberto(false)}>Contato</a>
        </div>
      </nav>

      {/* --- ÁREA PRINCIPAL (TEXTO E IMAGEM) --- */}
      <div className={styles.areaTitulo}>
        <img
          src={celularesImg}
          alt="Celulares com prints de projetos"
          className={styles.imgCelulares}
        />
        <div className={styles.areaTexto}>
          <h1 className={styles.nome}>GABRIEL HANEL</h1>
          <div style={{ textAlign: "center" }}>
            <p className={styles.profissao}>Desenvolvedor Mobile | QA</p>
          </div>
        </div>
      </div>

    </div>
  );
}