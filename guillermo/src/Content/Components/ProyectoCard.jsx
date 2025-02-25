import "@fontsource/audiowide";
import "../Styles/ProyectoCard.css";
import FotoDePerfil from "../../Assets/FotoDePerfil.png";
import { RiHtml5Line, RiPresentationLine, RiReplyLine } from "@remixicon/react";
import { Data_CardsProyectos } from "../Js/Data_CardsProyectos";


function ProyectoCard() {
    return (
        <>
            <div className="GridCradsProyects">
                {Data_CardsProyectos.map((Data_CardsProyectos, index) => (
                    <div className="main" key={index}>
                        <div className="card">
                            <div className="fl">
                                <div className="fullscreen">
                                    <RiReplyLine className="fullscreen_svg" />
                                </div>
                            </div>
                            <div className="card_content">
                                <label className="Imagen_Proyecto"></label>
                            </div>
                            <div className="card_back"></div>
                        </div>
                        <div className="data">
                            <div className="img">
                                <img src={ FotoDePerfil } alt="" />
                            </div>
                            <div className="text">
                                <div className="text_m">{Data_CardsProyectos.Titulo}</div>
                                <div className="text_s">{Data_CardsProyectos.EchoPor}</div>
                            </div>
                            <div className="Box-description">
                                <div className="title">
                                    <h1 className="DescriptionTitle">Descripción</h1>
                                </div>
                                <div className="Containerdescription">
                                    <div className="tooltip">
                                        <RiPresentationLine className="icon" />
                                        <span className="tooltip-text">
                                            {Data_CardsProyectos.Description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btns">
                            <div className="views">
                                <RiHtml5Line className="views_icons" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export { ProyectoCard };