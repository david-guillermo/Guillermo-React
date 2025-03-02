import ARCADE from "../../assets/ARCADE.png";
import { SnakeGame } from "./SnakeGame";
import "../Styles/Juego.css";

function Juego(){
    return (
        <div className="ContainerIMGJUEGO">
                <div className="Position_ImgJuego">
                    <div className="ContainerJuego">
                        <SnakeGame/>
                    </div>
                <img className="imgSnake" src={ARCADE} alt="" />
            </div>
        </div>
    )
}
export { Juego };