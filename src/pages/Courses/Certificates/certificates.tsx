import React from "react";
import { CertificatesCarousel } from "../../../components/Carousel/Certificates/CertificatesCarousel";
import styles from './certificates.module.css'

export default function Certificates() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div className="areaTitulo">
        <h1 className="titulo">CERTIFICADOS</h1>
      </div>
      <div className={styles.areaCarouselCertificados}>
              <CertificatesCarousel />
      </div>
    </div>
  );
};