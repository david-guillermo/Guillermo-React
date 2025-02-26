import { ProyectoCard } from "../Components/ProyectoCard";
import "../Styles/SectionProyectos.css";

function SectionProyectos  (){
    return (
        <div className="ContainerGrid">
            <div className="ProyectosTitle">
                <h1 className="Proyectos">Proyectos</h1>
            </div>
            <div className="GridProyectosCard">
                <ProyectoCard/>
            </div>
        </div>
    )
}
export { SectionProyectos };