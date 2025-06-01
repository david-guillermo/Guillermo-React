import { RiCss3Line, RiNextjsLine, RiReactjsLine } from "@remixicon/react";
// NEPTUNE
import NEPTUNE_1 from "../../assets/Images/Neptune/NEPTUNE_1.png";
import NEPTUNE_2 from "../../assets/Images/Neptune/NEPTUNE_2.png";
// NOVAFLEX
import NOVAFLEX_1 from "../../assets/Images/Novaflex/NOVAFLEX_1.png";
import NOVAFLEX_2 from "../../assets/Images/Novaflex/NOVAFLEX_2.png";
import NOVAFLEX_3 from "../../assets/Images/Novaflex/NOVAFLEX_3.png";
import NOVAFLEX_4 from "../../assets/Images/Novaflex/NOVAFLEX_4.png";
// ERP
import ERP_1 from "../../assets/Images/Haunter_ERP/ERP_1.png";
// GraficHower
import GRAFICHOWER_1 from "../../assets/Images/GraficHower/GraficHower_1.png";
import GRAFICHOWER_2 from "../../assets/Images/GraficHower/GraficHower_2.png";
import GRAFICHOWER_3 from "../../assets/Images/GraficHower/GraficHower_3.png";
// ===========================================
import TAILWIND from "../../assets/svg/Tailwind.svg";
import AXIOS from "../../assets/svg/Axios.svg";
import NODEJS from "../../assets/svg/Node.js.svg";
import EXPRESSJS from "../../assets/svg/Express.js.svg";
import SQLSERVER from "../../assets/svg/SQLserver.svg";
import JSONWEB from "../../assets/svg/JsonWebToken.svg";
import RADIXUI from "../../assets/svg/Radix-UI.svg";
import LUCIDE from "../../assets/svg/Lucide.svg";
import TYPESCRIPT from "../../assets/svg/TypeScript.svg";
import POSTCSS from "../../assets/svg/PostCSS.svg";
import SHADCN from "../../assets/svg/ShaDCN.svg";
import VITE from "../../assets/svg/Vite.svg";
import DATEFNS from "../../assets/svg/date-fns.svg";
// import  from "../../assets/svg/.svg";

export const proyectos = [
    {
        titulo: "NEPTUNE",
        autor: "Guillermo",
        imagenes: [NEPTUNE_1, NEPTUNE_2],
        estado: "proceso",
        descripcion: "Neptune es una plataforma para dueños de negocios que quieren tener su propia app de tienda, con su marca, su catálogo y una experiencia visual única.",
        tecnologias: [ RiCss3Line, RiReactjsLine ],
        github: "https://github.com/david-guillermo/Neptune",
        web: "",
    },
    {
        titulo: "ERP",
        autor: "Guillermo & Didacus.dev",
        imagenes: [ERP_1],
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
        github: "https://github.com/Haonter/ERP_FRONT",
        web: "",
    },
    {
        titulo: "NOVAFLEX",
        autor: "Guillermo",
        imagenes: [NOVAFLEX_1, NOVAFLEX_2, NOVAFLEX_3, NOVAFLEX_4],
        estado: "completado",
        descripcion: "Una Web pensada para la agilización de el desarrollo de paginas web mostrando a los desarrolladores diferentes resoluciones de su misma web",
        tecnologias: [
            RiNextjsLine,
            RiReactjsLine,
            { type: 'img', src: RADIXUI, alt: 'Radix UI' },
            { type: 'img', src: LUCIDE, alt: 'Lucide' },
            { type: 'img', src: TAILWIND, alt: 'Tailwind' },
            { type: 'img', src: TYPESCRIPT, alt: 'TypeScript' },
            { type: 'img', src: POSTCSS, alt: 'PostCSS' },
        ],
        github: "https://github.com/david-guillermo/Responsive__Online",
        web: "",
    },
    {
        titulo: "Grafic Hower",
        autor: "Guillermo",
        imagenes: [ GRAFICHOWER_1, GRAFICHOWER_2, GRAFICHOWER_3 ],
        estado: "completado",
        descripcion: "Una App Web pensada y desarrollada para la gestion de el tiempo y tareas de mediano a corto nivel con el metodo de Eisenhower",
        tecnologias: [
            RiReactjsLine,
            { type: 'img', src: TAILWIND, alt: 'Tailwind' },
            { type: 'img', src: TYPESCRIPT, alt: 'TypeScript' },
            { type: 'img', src: LUCIDE, alt: 'Lucide' },
            { type: 'img', src: RADIXUI, alt: 'Radix UI' },
            { type: 'img', src: SHADCN, alt: 'Shadcn' },
            { type: 'img', src: VITE, alt: 'Vite' },
            { type: 'img', src: DATEFNS, alt: 'date-fns' },
        ],
        github: "https://github.com/david-guillermo/task-matrix-visualizer",
        web: "",
    }
];
