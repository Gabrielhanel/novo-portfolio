import React from "react";
import { ProjectsCarousel } from "../../components/Carousel/Projects/ProjectsCarousel";
import styles from "./projetos.module.css";
const App: React.FC = () => {
  return (
    <div>
      <div className="areaTitulo">
        <h1 className="titulo">PROJETOS</h1>
      </div>
      <div className={styles.areaProjetos}>
            <ProjectsCarousel />
      </div>
    </div>
  );
};
export default App;