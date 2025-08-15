import "./about.css";
import myPhoto from "../../assets/images/minha-foto.png";
export default function About() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="areaTitulo">
        <text className="titulo">QUEM SOU EU?</text>
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingTop: "5vh" }}>
        <div style={{ display: "block"}}>
          <img src={myPhoto} className="imgMinhaFoto" />
          <div className="areaBotao">
            <a href="#" className="botao">BAIXAR C.V.</a>
          </div>
        </div>
        <div className="areaTexto">
          <text className="texto">
            Olá! Meu nome é Gabriel Hanel, tenho 19 anos e atualmente sou
            desenvolvedor front-end. Minha jornada no mundo da programação se
            iniciou no inicio de 2024, quando ingressei no curso de Ciências da
            Computação na ATITUS, onde hoje curso o quarto semestre.
          </text>
          <br /> <br />
          <text className="texto">
            Desde minha primeira linha de código, venho me apaixonando cada vez
            mais pela programação. Hoje meu foco é no desenvolvimento mobile,
            mais especificamente com React Native
          </text>
                    <br /> <br />
          <text className="texto">
            Sou movido por desafios e tenho facilidade para aprender novas
            tecnologias. Gosto de transformar ideias em soluções, sempre
            aplicando conceitos de UX/UI e boas práticas de código.
          </text>
                    <br /> <br />
          <text className="texto">
            Acredito que cada linha de código é uma oportunidade de inovar e
            impactar positivamente o mundo ao meu redor.
          </text>
        </div>
      </div>
    </div>
  );
}
