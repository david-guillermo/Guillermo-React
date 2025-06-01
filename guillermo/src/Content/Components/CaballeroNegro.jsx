import CABALLERONEGRO from "../../assets/Caballero/CaballeroNegroo.gif";
import GITHUB from "../../assets/Caballero/Github.png";
import LINKEDING from "../../assets/Caballero/Linkeding.png";
import INSTAGRAM from "../../assets/Caballero/Instagram.png";
import WHATSAPP from "../../assets/Caballero/WhatsApp.png";
import { useState } from "react";
import "../Styles/CaballeroNegro.css";

function CaballeroNegro() {
    const [start, setStart] = useState(false);
    const [showFinalLabel, setShowFinalLabel] = useState(false);

    const handleClick = () => {
        if (!start) {
        setStart(true);
        setTimeout(() => {
            setShowFinalLabel(true);
        }, 4200); // cuando termina la animación de walk
        }
    };

    return (
        <div className="Caballero-container" onClick={handleClick}>
        {!start && (
            <div className="Caballero-label">
                <h2 className="Contactame">CONTACTAME</h2>
                <span className="haz-click">haz click!</span>
            </div>
        )}
        {showFinalLabel && (
            <div className="Caballero-label show-final"><span className="Mis-redes">Mis redes</span></div>
        )}
        <div className={`Caballero-character ${start ? "animate" : ""}`}>
            <img className="CaballeroNegro" src={CABALLERONEGRO} alt="CaballeroNegro" />
        </div>
            <div className="social-icons">
                <a href="https://github.com/david-guillermo" target="_blank" rel="noopener noreferrer">
                    <img src={GITHUB} alt="GitHub" className={`icon ${start ? "reveal delay-1" : ""}`} />
                </a>
                <a href="https://www.linkedin.com/in/guillermo-arismendi-7993b7307/" target="_blank" rel="noopener noreferrer">
                    <img src={LINKEDING} alt="LinkedIn" className={`icon ${start ? "reveal delay-2" : ""}`} />
                </a>
                <a href="https://www.instagram.com/david_guiller1?igsh=Z3VpZGI5Z21sYmdt" target="_blank" rel="noopener noreferrer">
                    <img src={INSTAGRAM} alt="Instagram" className={`icon ${start ? "reveal delay-3" : ""}`} />
                </a>
                <a href="https://wa.me/584125936297?text=Hola, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad laboral 📬🎉" target="_blank" rel="noopener noreferrer">
                    <img src={WHATSAPP} alt="WhatsApp" className={`icon ${start ? "reveal delay-4" : ""}`} />
                </a>
            </div>
        </div>
    );
}

export { CaballeroNegro };
