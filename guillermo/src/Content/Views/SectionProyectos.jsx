import { ProyectoCard } from "../Components/ProyectoCard";
import "../Styles/SectionProyectos.css";

function SectionProyectos  (){
    return (
        <div className="ContainerGrid">
            <div>
                <ProyectoCard/>
            </div>
        </div>
    )
}
export { SectionProyectos };