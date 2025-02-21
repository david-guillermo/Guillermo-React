import "../Styles/Juego.css";

function Juego(){
    return(
        <div id="stage">
            <input type="checkbox" className="bullseye-input" id="b1"/>
            <label className="bullseye" htmlFor="b1"></label>
            
            <input type="checkbox" className="bullseye-input" id="b2"/>
            <label className="bullseye" htmlFor="b2"></label>
            
            <input type="checkbox" className="bullseye-input" id="b3"/>
            <label className="bullseye" htmlFor="b3"></label>
            
            <input type="checkbox" className="bullseye-input" id="b4"/>
            <label className="bullseye" htmlFor="b4"></label>
            
            <input type="checkbox" className="bullseye-input" id="b5"/>
            <label className="bullseye" htmlFor="b5"></label>
            
            <input type="checkbox" className="bullseye-input" id="b6"/>
            <label className="bullseye" htmlFor="b6"></label>
            
            <input type="checkbox" className="bullseye-input" id="b7"/>
            <label className="bullseye" htmlFor="b7"></label>
            
            <input type="checkbox" className="bullseye-input" id="b8"/>
            <label className="bullseye" htmlFor="b8"></label>
            <p id="score"> points</p>
            
            <a id="start" href="#stage">
                <span className="start-text">insert coin<span className="start-emoji">💰</span>
                </span>
            </a>
        </div>
    )
}
export { Juego };