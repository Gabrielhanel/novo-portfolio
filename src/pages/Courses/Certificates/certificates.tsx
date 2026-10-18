import React, { useState } from "react";
import { CertificatesCarousel } from "../../../components/Carousel/Certificates/CertificatesCarousel";
import styles from './certificates.module.css';

// Importação das imagens
import CertificadoFullStack from "../../../assets/images/certificado-devFullStack.webp";
import CertificadoAplicacoesJr from "../../../assets/images/certificado-devAplicacoesJr.webp";
import CertificadoEngenhariaDeSoftware from '../../../assets/images/certificado-qualificacaoEngSofrware.webp';
import CertificadoAWS from '../../../assets/images/certificate-aws.webp';
import CertificadoCloud from '../../../assets/images/certificadoArquiteturaSolucoesCloud.png'
import CertificadoPostman from '../../../assets/images/certificado-postman.jpg'
import CertificadoHardware from '../../../assets/images/ArquiteturaHardware.jpg'
import CertificadoHTMLCursoEmVideo from '../../../assets/images/html-css-cursoemvideo.jpg'

// 1. Criando as listas com a nova separação
const certificadosAcademicos = [
  { id: 'fullstack', img: CertificadoFullStack, alt: 'Certificado FullStack', text: 'Desenvolvimento de Soluções Full Stack – ATITUS (400h, 2024)' },
  { id: 'aplicacoes', img: CertificadoAplicacoesJr, alt: 'Certificado Aplicações Jr', text: 'Desenvolvimento de Aplicações Júnior – ATITUS (400h, 2024)' },
  { id: 'engsoftware', img: CertificadoEngenhariaDeSoftware, alt: 'Certificado Engenharia de Software', text: 'Engenharia de Software – ATITUS (400h, 2025)' },
  { id: 'engsoftware', img: CertificadoCloud, alt: 'Certificado Soluções em Cloud', text: 'Soluções em Cloud – ATITUS (400h, 2025)' },
  {id: 'arqhardware', img: CertificadoHardware, alt: 'Certificado Hardware', text: 'Hardware e Computação Distribuída – ATITUS (400h, 2026)'},
];

const certificadosOutros = [
    { id: 'html', img: CertificadoHTMLCursoEmVideo, alt: 'Certificado HTML e CSS (Módulo 1)', text: 'Curso de HTML e CSS – Curso em Vídeo (2024)' },
  { id: 'aws1', img: CertificadoAWS, alt: 'Certificado da AWS', text: 'AWS Cloud Foundations – AWS (400h, 2024)' },
  { id: 'postman', img: CertificadoPostman, alt: 'Certificado do postman', text: 'Postman: Do 0 ao Avançado + Testes Automatizados (3h, 2026)' },
];

export default function Certificates() {
  // 2. Estado para controlar a aba ativa (Começa na aba 'academicos')
  const [abaAtiva, setAbaAtiva] = useState('academicos');

  // 3. Lógica para definir qual lista vai para o carrossel
  let certificadosAtuais = certificadosAcademicos;
  if (abaAtiva === 'outros') {
    certificadosAtuais = certificadosOutros;
  }

  return (
    <div className={styles.container}>
      <div className={styles.areaTitulo}>
        <h1 className={styles.titulo}>CERTIFICADOS</h1>
      </div>

      {/* ÁREA DE BOTÕES (ABAS) */}
      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tabButton} ${abaAtiva === 'academicos' ? styles.tabActive : ''}`}
          onClick={() => setAbaAtiva('academicos')}
        >
          ACADÊMICOS
        </button>
        
        <button 
          className={`${styles.tabButton} ${abaAtiva === 'outros' ? styles.tabActive : ''}`}
          onClick={() => setAbaAtiva('outros')}
        >
          CURSOS EXTRAS
        </button>
      </div>

      {/* CARROSSEL */}
      <div className={styles.areaCarouselCertificados}>
        {/* Usamos a key para forçar a animação sempre que trocar a aba */}
        <CertificatesCarousel key={abaAtiva} certificados={certificadosAtuais} />
      </div>
    </div>
  );
}