import { RiMessage2Line } from "@remixicon/react";
// import { RiChatDeleteLine } from "@remixicon/react";
// ========================================================
import "../Styles/Start.css";
import FotoDePerfil from "../../assets/FotoDePerfil.png";

function Start (){
    return(
        <div className="Box-content">
            <div className="Box-imagen">
                <img id="imagen" src={FotoDePerfil} alt="" />
            </div>
            <div>
                <div className="Hi">
                    <span id="Guillermo">Hola, soy Guillermo Arismendi</span>
                </div>
                <div className="Iam">
                    <span id="full-Stack">Full Stack Developer</span>
                </div>
                <div className="Hire-me">
                    <div className="available">
                        <div className="availableContainer">
                            <span className="available-text">Disponible</span>
                            {/* <span className="available-text">No disponible</span> */}
                            <RiMessage2Line className="available-icon"/>
                            {/* <RiChatDeleteLine className="available-icon"/> */}
                        </div>
                    </div>
                    <div className="hiremebutton">
                        <a href="">
                            <button className="button">
                                <span className="base"></span>
                                <span className="red"></span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Start };