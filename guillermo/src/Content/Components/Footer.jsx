import "../Styles/Footer.css";
import { RiCopyrightLine, RiGithubLine, RiInstagramLine, RiMailAiLine, RiWhatsappLine } from "@remixicon/react";


function Footer () {
    return(
        <div className="ContainerFooter">
            <div className="Socials">
                <a href="https://mail.google.com/mail/?view=cm&to=d3vel0perguillermo@gmail.com" target="back">
                    <div className="ContainerIcons">
                        <RiMailAiLine className="IconFooter" alt="Email"/>
                    </div>
                </a>
                <a href="https://github.com/david-guillermo" target="back">
                    <div className="ContainerIcons">
                        <RiGithubLine className="IconFooter" alt="Github"/>
                    </div>
                </a>
                <a href="https://www.instagram.com/david_guiller1?igsh=Z3VpZGI5Z21sYmdt" target="back">
                    <div className="ContainerIcons">
                        <RiInstagramLine className="IconFooter" alt="Instagram"/>
                    </div>
                </a>
                <a href="https://wa.me/584125936297" target="back">
                    <div className="ContainerIcons">
                        <RiWhatsappLine className="IconFooter" alt="WhatsApp"/>
                    </div>
                </a>
            </div>
            <div className="Copy">
                <h1 className="CopyRight">copyright<RiCopyrightLine className="CopyRight-Icon"/> 2025 - Guillermo Arismendi</h1>
            </div>
        </div>
    )
}
export { Footer };