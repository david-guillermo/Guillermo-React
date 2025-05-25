import { RiCopyrightLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailAiLine, RiWhatsappLine } from "@remixicon/react";
import "../Styles/Footer.css";

function Footer() {
    return (
    <footer className="footer">
        <span><RiCopyrightLine/> {new Date().getFullYear()} Guillermo Arismendi. Todos los derechos reservados.</span>
        <div className="footer-links">
            <a href="https://github.com/david-guillermo" target="_blank">
                <RiGithubLine/>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=d3vel0perguillermo@gmail.com" target="_blank">
                <RiMailAiLine/>
            </a>
            <a href="https://www.instagram.com/david_guiller1?igsh=Z3VpZGI5Z21sYmdt" target="_blank">
                <RiInstagramLine/>
            </a>
            <a href="https://wa.me/584125936297?text=Hola, vi tu portafolio y me gustaría hablar contigo sobre una oportunidad laboral 📬🎉" target="_blank">
                <RiWhatsappLine/>
            </a>
            <a href="https://www.linkedin.com/in/guillermo-arismendi-7993b7307/" target="_blank">
                <RiLinkedinLine/>
            </a>
        </div>
    </footer>
    );
}
export { Footer };