// ==================================COMPONENTS 👀================================

// ==================================VIWS 👀======================================
import { Home } from "./Content/Views/Home";
import { SectionJuego } from "./Content/Views/SectionJuego";
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
            <Route path="/SectionJuego" element={<SectionJuego />} />
            <Route path="/SectionProyectos" element={<SectionProyectos />} />
        </Routes>
      {/* <Footer/> */}
    </Router>
);