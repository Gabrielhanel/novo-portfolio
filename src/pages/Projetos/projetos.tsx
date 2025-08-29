import React from "react";
import { ProjectsCarousel } from "../../components/Carousel/Projects/ProjectsCarousel";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div className="areaTitulo">
        <h1 className="titulo">PROJETOS</h1>
      </div>
      <ProjectsCarousel />
    </div>
  );
};
export default App;