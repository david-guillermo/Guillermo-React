// ==================================COMPONENTS 👀================================
import { Juego } from "./Content/Components/Juego";
import { Start } from "./Content/Components/Start";
import { Habilidades } from "./Content/Components/Habilidades";
import { Footer } from "./Content/Components/Footer";

// ==================================VIWS 👀======================================
import { Home } from "./Content/Views/Home";
import { SectionProyectos } from "./Content/Views/SectionProyectos";

// ================================================================================
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
      {/* <NavBar/> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Juego" element={<Juego />} />
            <Route path="/Start" element={<Start />} />
            <Route path="/SectionProyectos" element={<SectionProyectos />} />
            <Route path="/Habilidades" element={<Habilidades />} />
            <Route path="/Footer" element={<Footer />} />
        </Routes>
    </Router>
);