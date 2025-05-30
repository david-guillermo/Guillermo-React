import { useState } from 'react';
import FOTOPERFIL from "../../assets/FotoDePerfil.png";
import {
RiArrowUpSLine,
RiArrowLeftSLine,
RiArrowRightSLine,
RiCheckboxBlankCircleLine,
RiCheckboxCircleLine
} from "@remixicon/react";
import "../Styles/ProyectosCards.css";

function ProyectosCard({ titulo, autor, imagenes, estado, descripcion, tecnologias }) {
const [isExpanded, setIsExpanded] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const handleButtonClick = () => setIsExpanded(!isExpanded);
const nextImage = () => setCurrentImageIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
const goToImage = (index) => setCurrentImageIndex(index);

return (
    <div className={`CardProyect ${isExpanded ? 'expanded' : ''}`}>
    <div className="Indicador-Button">
        <div className="Button">
        <button className="Button-Deploy" onClick={handleButtonClick}>
            <RiArrowUpSLine className="Icon-Deploy" />
        </button>
        </div>
    </div>
    <div className="ImgProyectCard">
        <div className="carousel-container">
        <img className="ImgProyect" src={imagenes[currentImageIndex]} alt="project" />
        <button className="carousel-btn carousel-btn-prev" onClick={prevImage}>
            <RiArrowLeftSLine className="carousel-icon" />
        </button>
        <button className="carousel-btn carousel-btn-next" onClick={nextImage}>
            <RiArrowRightSLine className="carousel-icon" />
        </button>
        <div className="carousel-indicators">
            {imagenes.map((_, index) => (
            <button key={index} className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`} onClick={() => goToImage(index)} />
            ))}
        </div>
        </div>
    </div>
    <div className="Perfil-Card">
        <div className="Perfil-Photo">
        <img className="ImgPerfil" src={FOTOPERFIL} alt="perfil" />
        </div>
        <div className="Perfil-Info">
        <div className="Name-Proyect">
            <h2 className="TitleProyect">{titulo}</h2>
        </div>
        <div className="Name-Author">{autor}</div>
        </div>
    </div>
    <div className="TecsGrid">
        <div className="Indicador">
        {estado === "completado" ? (
            <>
            <RiCheckboxCircleLine className="Icon-Indicador Terminado" />
            <h3 className="Estado-Terminado">Terminado</h3>
            </>
        ) : (
            <>
            <RiCheckboxBlankCircleLine className="Icon-Indicador Proceso" />
            <h3 className="Estado-Proceso">En Proceso</h3>
            </>
        )}
        </div>
        <div className="tech-icon">
        {tecnologias.map((Icono, index) => (
            <Icono key={index} className="Icon-Svg_TEC" />
        ))}
        </div>
    </div>
    <div className="DescriptionProyect">
        <span className="DescriptionText">{descripcion}</span>
    </div>
    </div>
);
}

export { ProyectosCard };
