import "../Styles/Footer.css";
import { RiCopyrightLine, RiGithubLine, RiInstagramLine, RiMailAiLine, RiWhatsappLine } from "@remixicon/react";


function Footer () {
    return(
        <div className="ContainerFooter">
            <div className="Socials">
                <div className="ContainerIcons">
                    <RiMailAiLine className="IconFooter"/>
                </div>
                <div className="ContainerIcons">
                    <RiGithubLine className="IconFooter"/>
                </div>
                <div className="ContainerIcons">
                    <RiInstagramLine className="IconFooter"/>
                </div>
                <div className="ContainerIcons">
                    <RiWhatsappLine className="IconFooter"/>
                </div>
            </div>
            <div className="Copy">
                <h1 className="CopyRight">copyright<RiCopyrightLine className="CopyRight-Icon"/> 2025 - Guillermo Arismendi</h1>
            </div>
        </div>
    )
}
export { Footer };