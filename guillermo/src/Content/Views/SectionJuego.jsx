import ARCADE from "../../assets/ARCADE.png";
import { AboutMe } from "../Components/AboutMe";
import { SnakeGame } from "../Components/SnakeGame";
import "../Styles/SectionJuego.css";

function SectionJuego(){
    return (
        <div className="AboutGameContainer">
            <AboutMe/>
            <div className="Container">
                <div className="ContainerJuego">
                    <SnakeGame/>
                </div>
                <img className="imgSnake" src={ARCADE} alt="" />
            </div>
        </div>
    )
}
export { SectionJuego };