import "@fontsource/audiowide";
import "../Styles/ProyectoCard.css";
import FotoDePerfil from "../../assets/FotoDePerfil.png";
import { RiArrowGoForwardLine, RiGithubLine, RiHtml5Line } from "@remixicon/react";


function ProyectoCard() {
    return (
        <>
            <div className="main">
                <div className="card_1">
                    <div className="fl">
                        <div className="fullscreen">
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
                        <div className="text_m">Ariwe</div>
                        <div className="text_s">Guillermo</div>
                    </div>
                    <div className="Box-description">
                        <div className="Containerdescription">
                            <div className="tooltip">
                                <button className="BUTTON_GITHUB">
                                    <RiGithubLine className="icon" />
                                    <RiArrowGoForwardLine className="icon" />
                                </button>
                                <span className="tooltip-text">
                                Aplicación que administra negocios locales a la vez que ofrece servicio de transporte y delivery de dichos negocios
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
            <div className="main">
                <div className="card_2">
                    <div className="fl">
                        <div className="fullscreen">
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
                        <div className="text_m">Ariwe</div>
                        <div className="text_s">Guillermo</div>
                    </div>
                    <div className="Box-description">
                        <div className="Containerdescription">
                            <div className="tooltip">
                                <button className="BUTTON_GITHUB">
                                    <RiGithubLine className="icon" />
                                    <RiArrowGoForwardLine className="icon" />
                                </button>
                                <span className="tooltip-text">
                                Aplicación que administra negocios locales a la vez que ofrece servicio de transporte y delivery de dichos negocios
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
            <div className="main">
                <div className="card_3">
                    <div className="fl">
                        <div className="fullscreen">
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
                        <div className="text_m">Ariwe</div>
                        <div className="text_s">Guillermo</div>
                    </div>
                    <div className="Box-description">
                        <div className="Containerdescription">
                            <div className="tooltip">
                                <button className="BUTTON_GITHUB">
                                    <RiGithubLine className="icon" />
                                    <RiArrowGoForwardLine className="icon" />
                                </button>
                                <span className="tooltip-text">
                                Aplicación que administra negocios locales a la vez que ofrece servicio de transporte y delivery de dichos negocios
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
            <div className="main">
                <div className="card_4">
                    <div className="fl">
                        <div className="fullscreen">
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
                        <div className="text_m">Ariwe</div>
                        <div className="text_s">Guillermo</div>
                    </div>
                    <div className="Box-description">
                        <div className="Containerdescription">
                            <div className="tooltip">
                                <button className="BUTTON_GITHUB">
                                    <RiGithubLine className="icon" />
                                    <RiArrowGoForwardLine className="icon" />
                                </button>
                                <span className="tooltip-text">
                                Aplicación que administra negocios locales a la vez que ofrece servicio de transporte y delivery de dichos negocios
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
        </>
    );
}

export { ProyectoCard };