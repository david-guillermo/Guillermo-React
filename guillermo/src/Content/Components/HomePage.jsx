import "../Styles/HomePage.css";
import FotoDePerfil from "../../assets/FotoDePerfilReal.png";
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
                <div className="btn">
                    <span className="span">Contactame<RiContactsBookLine className="icon-mobile"/></span>
                    <div className="container">
                        <a href="https://github.com/david-guillermo" target="_blank" className="icon">
                            <RiGithubLine  className="svg"/>
                        </a>
                        <a href="https://www.instagram.com/david_guiller1?igsh=Z3VpZGI5Z21sYmdt" target="_blank" className="icon">
                            <RiInstagramLine  className="svg"/>
                        </a>
                        <a href="https://www.linkedin.com/in/guillermo-arismendi-7993b7307/" target="_blank" className="icon">
                            <RiLinkedinFill  className="svg"/>
                        </a>
                        <a href="https://wa.me/584125936297?text=Hola, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad laboral 📬🎉" target="_blank" className="icon">
                            <RiWhatsappLine  className="svg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { HomePage };