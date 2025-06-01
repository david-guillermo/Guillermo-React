// src/components/ListaProyectos.jsx
import { ProyectosCard } from "./ProyectosCards";
import { proyectos } from "./ProyectosData";
import "../Styles/ProyectosCards.css";

function ListaProyectos() {
    return (
        <div className="Container-Proyectos">
            <div className="Container_TitleProyectos">
                <h1 className="Proyectos">Proyectos</h1>
            </div>
            <div className="Container-AllCards">
                {proyectos.map((proyecto, index) => (
                    <ProyectosCard key={index} {...proyecto} />
                ))}
            </div>
        </div>
    );
}

export { ListaProyectos };
