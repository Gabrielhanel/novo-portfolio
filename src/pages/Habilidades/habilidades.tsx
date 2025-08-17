import htmlImage from "../../assets/icons/html.png";
import cssImage from "../../assets/icons/css.png";
import jsImage from "../../assets/icons/javascript.png";
import reactImage from "../../assets/icons/react.png";
import tsImage from "../../assets/icons/typescript.png";
import reactNativeImage from "../../assets/icons/react-native.png"
import gitImage from "../../assets/icons/git.png"
import javaImage from "../../assets/icons/java.png"
import postgresql from "../../assets/icons/postgres.png"

import "./habilidades.css";

export default function Habilidades() {
  return (
    <div className="container">
      <div className="areaTitulo">
        <h1 className="titulo">HABILIDADES</h1>
      </div>

      <h2 className="subTitulo">FRONT END</h2>

      <div style={{display: "flex",alignItems: "center", justifyContent: "center", maxWidth: "1120px"}}>
      <div className="cards">

      <div className="cardHabilidades">
        <img src={htmlImage} alt="Logo HTML" className="imgHabilidades"/>
        <text className="textHabilidades">HTML</text>
      </div>

      <div className="cardHabilidades">
        <img src={cssImage} alt="Logo CSS"  className="imgHabilidades"/>
        <text  className="textHabilidades">CSS</text>
      </div>

      <div className="cardHabilidades">
        <img src={jsImage} alt="Logo Javascript"  className="imgHabilidades"/>
        <text className="textHabilidades">JAVASCRIPT</text>
      </div>

      <div className="cardHabilidades">
        <img src={tsImage} alt="Logo Typescript"  className="imgHabilidades"/>
        <text className="textHabilidades">TYPESCRIPT</text>
      </div>

      <div className="cardHabilidades">
        <img src={reactImage} alt="Logo React" className="imgHabilidades" />
        <text className="textHabilidades">REACT</text>
      </div>

      <div className="cardHabilidades">
        <img src={reactNativeImage} alt="Logo React Native"  className="imgHabilidades"/>
      </div>

      </div>
</div>

      <h2 className="subTitulo">OUTROS</h2>

      
      <div style={{display: "flex",alignItems: "center", justifyContent: "center", maxWidth: "1120px"}}>
      <div className="cards">
      <div  className="cardHabilidades">
        <img src={javaImage} alt="Logo Java"  className="imgHabilidades"/>
        <text  className="textHabilidades">JAVA</text>
      </div>

      <div className="cardHabilidades">
        <img src={postgresql} alt="Logo Postgresql" className="imgHabilidades" />
        <text className="textHabilidades">POSTGRESQL</text>
      </div>


      <div className="cardHabilidades">
        <img src={gitImage} alt="Logo Git" className="imgHabilidades" />
        <text className="textHabilidades">GIT</text>
      </div>
      </div>
      </div>

      </div>
  );
}
