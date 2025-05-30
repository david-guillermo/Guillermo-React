import { useState } from 'react';
import "../Styles/CaballeroNegro.css";
import CABALLERONEGRO from "../../assets/Caballero/CaballeroNegroo.gif";
import GITHUB from "../../assets/svg/Github.png";

function CaballeroNegro() {
    const [start, setStart] = useState(false);

    const handleClick = () => {

        setStart(true);
    };

    return (
        <div className="kratos-container" onClick={handleClick}>
            <div className={`kratos-character ${start ? 'animate' : ''}`}>
                <img className="CaballeroNegro" src={CABALLERONEGRO} alt="CaballeroNegro" />
            </div>
            <div className="social-icons">
                <a  className="icon">
                    <img src={GITHUB} alt="Github" className={`icon ${start ? 'reveal delay-1' : ''}`}/>
                    {/* <RiGithubLine  className={`icon ${start ? 'reveal delay-1' : ''}`}/> */}
                </a>
                <a  className="icon">
                    <img src="" alt="Instagram" />
                    {/* <RiInstagramLine  className={`icon ${start ? 'reveal delay-2' : ''}`}/> */}
                </a>
                <a  className="icon">
                    <img src="" alt="Linkeding" />
                    {/* <RiLinkedinFill  className={`icon ${start ? 'reveal delay-3' : ''}`}/> */}
                </a>
                <a  className="icon">
                    <img src="" alt="Whatsapp" />
                    {/* <RiWhatsappLine  className={`icon ${start ? 'reveal delay-4' : ''}`}/> */}
                </a>
            </div>
        </div>
    );
}
export { CaballeroNegro };