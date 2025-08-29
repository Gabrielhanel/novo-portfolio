import React from "react";
import { CertificatesCarousel } from "../../../components/Carousel/Certificates/CertificatesCarousel";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div className="areaTitulo">
        <h1 className="titulo">CERTIFICADOS</h1>
      </div>
      <CertificatesCarousel />
    </div>
  );
};
export default App;