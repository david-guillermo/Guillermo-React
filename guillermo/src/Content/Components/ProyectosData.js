import { RiHtml5Line, RiCss3Line, RiReactjsLine } from "@remixicon/react";
import NEPTUNE from "../../assets/Images/Neptune.png";
import ERP from "../../assets/Images/ERP.png";
import NOVAFLEX from "../../assets/Images/Novaflex.png"; 
import TAILWIND from "../../assets/svg/Tailwind.svg";
import AXIOS from "../../assets/svg/Axios.svg";
import NODEJS from "../../assets/svg/Node.js.svg";
import EXPRESSJS from "../../assets/svg/Express.js.svg";
import SQLSERVER from "../../assets/svg/SQLserver.svg";
import JSONWEB from "../../assets/svg/JsonWebToken.svg";

export const proyectos = [
    {
        titulo: "NEPTUNE",
        autor: "Guillermo",
        imagenes: [NEPTUNE],
        estado: "proceso",
        descripcion: "Neptune es una plataforma para dueños de negocios que quieren tener su propia app de tienda, con su marca, su catálogo y una experiencia visual única.",
        tecnologias: [RiHtml5Line, RiCss3Line, RiReactjsLine]
    },
    {
        titulo: "ERP",
        autor: "Guillermo & Didacus.dev",
        imagenes: [ERP],
        estado: "en-proceso",
        descripcion: "ERP para la gestión integral de ventas, productos e inventario, con módulos de facturación, contratos, envío de correos electrónicos y mucho más, un sistema empresarial robusto y modular diseñado para optimizar y centralizar todos los procesos clave de una empresa",
        tecnologias: [
            RiReactjsLine,
            { type: 'img', src: TAILWIND, alt: 'Tailwind' },
            { type: 'img', src: AXIOS, alt: 'Axios' },
            { type: 'img', src: NODEJS, alt: 'Node.js' },
            { type: 'img', src: EXPRESSJS, alt: 'Express.js' },
            { type: 'img', src: SQLSERVER, alt: 'SQLserver' },
            { type: 'img', src: JSONWEB, alt: 'SQLserver' }
        ],
    },
    {
        titulo: "NOVAFLEX",
        autor: "Guillermo",
        imagenes: [NOVAFLEX],
        estado: "completado",
        descripcion: "Una Web pensada para la agilización de el desarrollo de paginas web mostrando a los desarrolladores diferentes resoluciones de su misma web",
        tecnologias: [
            // RiReactjsLine,
            // { type: 'img', src: TAILWIND, alt: 'Tailwind' }
        ],
    }
];
