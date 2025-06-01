import "../Styles/HomePage.css";
import FotoDePerfil from "../../assets/Foto-Perfil.png";
import { CaballeroNegro } from "./CaballeroNegro";
// import CABALLERO from "../../assets/Caballero/CaballeroNegro.gif";

function HomePage () {
    return (
        <div className="ContainerHomePage">
            <div className="Box-imagen">
                <img id="imagen" src={FotoDePerfil} alt="" />
            </div>
            <div className="Hi">
                <span >Hola, soy Guillermo Arismendi</span>
            </div>
            <div className="Iam">
                <span>Full Stack Developer</span>
            </div>
            <div className="Hire-me">
                <CaballeroNegro/>
            </div>
        </div>
    );
}
export { HomePage };