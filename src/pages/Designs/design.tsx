import './design.css'
import imagemSiteFoco from '../../../src/assets/images/tela-sitefoco.png'
import imagemAppFred from '../../../src/assets/images/tela-appfred.png'
export default function Design() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="areaTitulo">
                <text className="titulo">DESIGNS E <br /> PROTÓTIPOS</text>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingLeft: "5vh", paddingTop: "5vh" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
                <img src={imagemSiteFoco} alt="Site da Foco Cartuchos" className='imgSiteFoco'/>
                <br />
                <text className='texto'>Redesign - Site da Foco Cartuchos</text>
                <div className='link'>
                    <a href="" className='textoLink'>FIGMA</a>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: "5vh"}}>
                <img src={imagemAppFred} alt="Aplicativo Pão do Fred" className='imgAppFred'/>
                <br />
                <text className='texto'>Design - Aplicativo Pão do Fred</text>
                <div className='link'>
                    <a href="" className='textoLink'>FIGMA</a>
                </div>
            </div>
            </div>
        </div>
    );
}