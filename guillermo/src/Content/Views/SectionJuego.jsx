import ARCADE from "../../assets/ARCADE.png";
import FotoDePerfil from "../../assets/FotoDePerfil.png";
import { SnakeGame } from "../Components/SnakeGame";
import "../Styles/SectionJuego.css";

function SectionJuego(){
    return (
        <div className="AboutGameContainer">
            <div className="AboutMeContainer">
                <div className="AboutContainer">
                    <div className="ContainerImgAbout">
                        <img className="ImgAbout" src={FotoDePerfil} alt="" />
                        <h1 className="AboutMe">Sobre mi</h1>
                    </div>
                    <div className="AboutDescription">
                        <p className="Description">
                            Soy un apacionado de la tecnología y la programación, empeñado en crear paginas web, elementos y deseños revolucionarios y modernos para el mundo de la web llevando asi fabolusas ideas a la realidad.
                        </p>
                    </div>
                </div>
            </div>
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