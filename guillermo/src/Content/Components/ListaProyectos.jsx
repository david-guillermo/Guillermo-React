// src/components/ListaProyectos.jsx
import { ProyectosCard } from "./ProyectosCards";
import { proyectos } from "./ProyectosData";
// import "../Styles/ProyectosCards.css";

function ListaProyectos() {
    return (
        <div className="Container-AllCards">
            {proyectos.map((proyecto, index) => (
                <ProyectosCard key={index} {...proyecto} />
            ))}
        </div>
    );
}

export { ListaProyectos };
