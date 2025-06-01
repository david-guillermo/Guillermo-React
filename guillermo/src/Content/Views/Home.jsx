import "../Styles/Home.css";
// =============================COMPONENTS 📦=============================
import { HomePage } from "../Components/HomePage";
import { AboutMe } from "../Components/AboutMe";
import { SnakeGame } from "../Components/SnakeGame";
import { ListaProyectos } from "../Components/ListaProyectos";
import { Habilidades } from "../Components/Habilidades";
import { Footer } from "../Components/Footer";

function Home (){
    return(
        <div className="AllPortfolio">
            <div className="HomePage_Portfolio">
                <HomePage/>
            </div>
            <div className="AboutMe-Juego_Portfolio">
                <AboutMe/>
                <SnakeGame/>
            </div>
            <div className="Proyectos_Portfolio">
                <ListaProyectos/>
            </div>
            <div className="Habilidades_Portfolio">
                <Habilidades/>
            </div>
            <div className="Footer_Portfolio">
                <Footer />
            </div>
        </div>
    )
}
export { Home };