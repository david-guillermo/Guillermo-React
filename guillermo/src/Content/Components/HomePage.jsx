import "../Styles/HomePage.css";
import FotoDePerfil from "../../assets/FotoDePerfilReal.png";
import DONKYKONG from "../../assets/DonkyKong/DONKYKONG.gif";
import BARRIL from "../../assets/DonkyKong/BARRIL.png";
import { RiGithubLine, RiInstagramLine, RiLinkedinFill, RiContactsBookLine, RiWhatsappLine,  } from "@remixicon/react";

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
                    <div className="ContainerSocial">
                        <div className="DonkyKongContainer">
                            <img className="DonkyKong" src={DONKYKONG}></img>
                        </div>
                        <div className="PisoDonky"></div>
                        <div className="Socials">
                            <a href="https://github.com/david-guillermo" target="_blank">
                                <div className="ContainerImgBarril">
                                    <RiGithubLine  className="svg"/>
                                    <img className="ImgBarril" src={BARRIL} alt="Barril" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/david_guiller1?igsh=Z3VpZGI5Z21sYmdt" target="_blank">
                                <div className="ContainerImgBarril">
                                    <RiInstagramLine  className="svg"/>
                                    <img className="ImgBarril" src={BARRIL} alt="Barril" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/guillermo-arismendi-7993b7307/" target="_blank">
                                <div className="ContainerImgBarril">
                                    <RiLinkedinFill  className="svg"/>
                                    <img className="ImgBarril" src={BARRIL} alt="Barril" />
                                </div>
                            </a>
                            <a href="https://wa.me/584125936297?text=Hola, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad laboral 📬🎉" target="_blank">
                                <div className="ContainerImgBarril">
                                    <RiWhatsappLine  className="svg"/>
                                    <img className="ImgBarril" src={BARRIL} alt="Barril" />
                                </div>
                            </a>
                        </div>
                    </div>
                        {/* <a  className="icon">
                            <RiGithubLine  className="svg"/>
                        </a>
                        <a  className="icon">
                            <RiInstagramLine  className="svg"/>
                        </a>
                        <a  className="icon">
                            <RiLinkedinFill  className="svg"/>
                        </a>
                        <a  className="icon">
                            <RiWhatsappLine  className="svg"/>
                        </a> */}
            </div>
        </div>
    );
}
export { HomePage };