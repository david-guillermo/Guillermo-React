import "@fontsource/audiowide";
import "../Styles/Home.css";
// ============================= VIWS 👀  COMPONENTS 📦=============================
import { Juego } from "../Components/Juego";
import { AboutMe } from "../Components/AboutMe";
import { Start } from "../Components/Start";
import { SectionProyectos } from "./SectionProyectos";
import { Habilidades } from "../Components/Habilidades";
import { Footer } from "../Components/Footer";

function Home (){
    return(
        <div className="ContainerGeneral">
            <div className="Container_Start">
                <Start/>
            </div>
            <div className="Container_AboutMeJuego">
                <AboutMe/>
                <Juego/>
            </div>
            <div className="Container_Proyectos">
                <SectionProyectos/>
            </div>
            <div className="Container_HabalidadesStudies">
                <Habilidades/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </div>
    )
}
export { Home };