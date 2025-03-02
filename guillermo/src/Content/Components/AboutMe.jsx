import FotoDePerfil from "../../assets/FotoDePerfil.png";
import "../Styles/AboutMe.css";

function AboutMe (){
    return(
        <div className="AboutContainer">
            <div className="ContainerImgAbout">
                <img className="ImgAbout" src={FotoDePerfil} alt="" />
                <h1 className="AboutMe">Sobre mi</h1>
            </div>
            <div className="AboutDescription">
                <p className="Description">
                    desarrollador full stack con un enfoque especial en el frontend. Soy de <span className="Vene">Vene</span><span className="zue">zue</span><span className="la">la</span> y me apasiona la tecnología, la innovación y la creación de soluciones digitales que impacten positivamente en mi entorno. Mi trayectoria en programación comenzó con un curso en línea, pero mi verdadera evolución ha sido a través del aprendizaje autodidacta y la práctica constante en proyectos propios y colaborativos.
                </p>
            </div>
        </div>
    )
}
export { AboutMe };
