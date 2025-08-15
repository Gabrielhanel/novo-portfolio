import celularesImg from "../../assets/images/celulares.png";
import "./home.css";

export default function Home() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="areaTagFechamento">
            <span className="tagFechamento">{"<" + "/" + ">"}</span>
          </div>
          <a href="#" className="linkTexto">
            {" "}
            Sobre
          </a>
          <a href="#" className="linkTexto">
            {" "}
            Projetos
          </a>
          <a href="#" className="linkTexto">
            {" "}
            Habilidades
          </a>
          <a href="#" className="linkTexto" style={{marginRight: "7vh"}}>
            {" "}
            Contato
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        <img
          src={celularesImg}
          alt="Celulares com prints de projetos"
          className="imgCelulares"
        />
        <div className="areaTexto">
          <h1 className="nome">GABRIEL HANEL</h1>
          <div style={{ textAlign: "center" }}>
            <p className="profissao">Desenvolvedor Front-end Web & Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
