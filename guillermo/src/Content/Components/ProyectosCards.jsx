import "@fontsource/audiowide";
import REACT from "../../assets/svg/React.svg";
import TAILWIND from "../../assets/svg/Tailwind.svg";
import AXIOS from "../../assets/svg/Axios.svg";
import NODEJS from "../../assets/svg/Node.js.svg";
import EXPRESSJS from "../../assets/svg/Express.js.svg";
import SQLSERVER from "../../assets/svg/SQLserver.svg";
import JSONWEBTOKEN from "../../assets/svg/JsonWebToken.svg";
import TURBOPACK from "../../assets/svg/TurbopackIcon.svg";
import NEXTJS from "../../assets/svg/Nextjs.svg";
import SHADCN from "../../assets/svg/Shadcnui.svg";
import TYPESCRIPT from "../../assets/svg/TypeScript.svg";
import FotoDePerfil from "../../assets/FotoDePerfil.png";
import { RiArrowGoForwardLine, RiGithubLine, RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "@remixicon/react";
import "../Styles/ProyectosCards.css";

function ProyectosCards () {
    return(
        <div className="Container-AllCards">
            <div className="main">
                <div className="card card_1">
                    <div className="fl">
                        <div className="fullscreen">
                            {/* <RiCheckboxBlankCircleLine className="Icon_Progress"/> */}
                            <RiCheckboxCircleLine className="Icon_Complete"/>
                        </div>
                    </div>
                    <div className="card_content">
                        <label className="Imagen_Proyecto"></label>
                    </div>
                    <div className="card_back"></div>
                </div>
                <div className="data">
                    <div className="img_perfil">
                        <img className="imgPerfil" src={FotoDePerfil} alt="FotoDePerfil" />
                    </div>
                    <div className="text">
                        <div className="text_m">NovaFlex</div>
                        <div className="text_s">Guillermo</div>
                    </div>
                    <div className="Box-description">
                        <div className="Containerdescription">
                            <div className="tooltip">
                                <div className="BoxButtons">
                                    <a href="https://github.com/david-guillermo/Responsive__Online" target="back">
                                        <RiGithubLine className="icon" />
                                    </a>
                                    {/* <a href="">
                                        <RiArrowGoForwardLine className="icon" />
                                    </a> */}
                                </div>
                                <span className="tooltip-text">
                                    Una pagina web desarrollada para programadores web, donde ayuda al desarrollador a ver las diferentes resoluciones de su proyecto, agilizando asi el desarrollo responsive.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btns">
                    <div className="views">
                        <img className="views_icons" src={NEXTJS} alt="NextJs" />
                        <img className="views_icons" src={TURBOPACK} alt="TurboPack" />
                        <img className="views_icons" src={SHADCN} alt="TurboPack" />
                        <img className="views_icons" src={TAILWIND} alt="Tailwind" />
                        <img className="views_icons" src={TYPESCRIPT} alt="typeScript" />
                    </div>
                </div>
            </div>
            {/* =========================================== */}
            <div className="main">
                <div className="card card_2">
                    <div className="fl">
                        <div className="fullscreen">
                            <RiCheckboxBlankCircleLine className="Icon_Progress"/>
                            {/* <RiCheckboxCircleLine className="Icon_Complete"/> */}
                        </div>
                    </div>
                    <div className="card_content">
                        <label className="Imagen_Proyecto"></label>
                    </div>
                    <div className="card_back"></div>
                </div>
                <div className="data">
                    <div className="img_perfil">
                        <img className="imgPerfil" src={FotoDePerfil} alt="FotoDePerfil" />
                    </div>
                    <div className="text">
                        <div className="text_m">Neptune</div>
                        <div className="text_s">Guillermo</div>
                    </div>
                    <div className="Box-description">
                        <div className="Containerdescription">
                            <div className="tooltip">
                                <div className="BoxButtons">
                                    <a href="https://github.com/david-guillermo/Neptune" target="back">
                                        <RiGithubLine className="icon" />
                                    </a>
                                    {/* <a href="">
                                        <RiArrowGoForwardLine className="icon" />
                                    </a> */}
                                </div>
                                <span className="tooltip-text">
                                    Neptune es una plataforma para dueños de negocios que quieren su propia app de tienda, con su marca y catálogo. No es un marketplace: tu negocio es el protagonista, con una app única y personalizada.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btns">
                    <div className="views">
                        
                    </div>
                </div>
            </div>
            {/* =========================================== */}
            <div className="main">
                <div className="card card_3">
                    <div className="fl">
                        <div className="fullscreen">
                            <RiCheckboxBlankCircleLine className="Icon_Progress"/>
                            {/* <RiCheckboxCircleLine className="Icon_Complete"/> */}
                        </div>
                    </div>
                    <div className="card_content">
                        <label className="Imagen_Proyecto"></label>
                    </div>
                    <div className="card_back"></div>
                </div>
                <div className="data">
                    <div className="img_perfil">
                        <img className="imgPerfil" src={FotoDePerfil} alt="FotoDePerfil" />
                    </div>
                    <div className="text">
                        <div className="text_m">ERP</div>
                        <div className="text_s">Guillermo</div>
                    </div>
                    <div className="Box-description">
                        <div className="Containerdescription">
                            <div className="tooltip">
                                <div className="BoxButtons">
                                    <a href="https://github.com/Haonter-ERP" target="back">
                                        <RiGithubLine className="icon" />
                                    </a>
                                    {/* <a href="">
                                        <RiArrowGoForwardLine className="icon" />
                                    </a> */}
                                </div>
                                <span className="tooltip-text">
                                    ERP para gestión de ventas, productos, inventario, facturación, contratos y envío de correos. Un sistema pensado para aportar valor a empresas, siendo también mi proyecto más ambicioso hasta hoy.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btns">
                    <div className="views">
                        <img className="views_icons" src={REACT} alt="" />
                        <img className="views_icons" src={TAILWIND} alt="" />
                        <img className="views_icons" src={AXIOS} alt="" />
                        <img className="views_icons" src={NODEJS} alt="" />
                        <img className="views_icons" src={EXPRESSJS} alt="" />
                        <img className="views_icons" src={SQLSERVER} alt="" />
                        <img className="views_icons" src={JSONWEBTOKEN} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export { ProyectosCards };