import { RiMessage2Line } from "@remixicon/react";
import { SectionJuego } from '../Views/SectionJuego';
import FotoDePerfil_2 from "../../Assets/FotoDePerfil_2.png";
import "../Styles/Home.css";
import "@fontsource/audiowide";
import { SectionProyectos } from "./SectionProyectos";

function Home (){
    return(
        <>
            <div className="Box-content">
                <div className="Box-imagen">
                    <img src={FotoDePerfil_2} alt="perfil" id="imagen"/>
                </div>
                <div>
                    <div className="Hi">
                        <span id="Guillermo">Como estas?, Soy Guillermo</span>
                    </div>
                    <div className="Iam">
                        <span id="full-Stack">Full Stack Developer</span>
                    </div>
                    <div className="Hire-me">
                        <div className="available">
                            <div className="availableContainer">
                                <span className="available-text">Disponible</span>
                                <RiMessage2Line className="available-icon"/>
                            </div>
                        </div>
                        <div className="hiremebutton">
                            <a href="#footer-content-title">
                                <button className="button">
                                    <span className="base"></span>
                                    <span className="red"></span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Home };