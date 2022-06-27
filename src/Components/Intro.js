
import "./Intro.css";
import Github from "../img/github.png";
import Linkedin from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import boy from "../img/boy.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Floatingdiv  from "./Floatingdiv/Floatingdiv";
import Crown from "../img/crown.png";
import Thumbup from "../img/thumbup.png";
import glassesemoji from "../img/glassesimoji.png";

import { Link } from "react-router-dom";


const Intro=()=>{
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Prikshit Gupta</span>
                    <span>Frontend Developer with high level of Experience
                        in web designing and development, producting the
                        quality work
                    </span>
                </div>
                <Link to="/contact" spy={true} smooth={true}>
                <button className="button i-button">Hire Me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/prikshit007" target="blank">
                    <img src={Github}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/prikshit-gupta-4514951b4/" target="blank">
                    <img src={Linkedin}></img>
                    </a>
                    <a>
                    <img src={Instagram}></img>
                    </a>
                </div>
            </div>
            <div className="i-right">
            <img src={Vector1}></img>
            <img src={Vector2}></img>
            <img src={boy}></img>
            <img src={glassesemoji}></img>
            <div style={{top:'-4%', left:'68%'}}>
                <Floatingdiv image={Crown} txt1="Frontend" txt2="Developer"></Floatingdiv>
            </div>
            <div style={{top:'18rem', left:'0'}}>
                <Floatingdiv image={Thumbup} txt1="Best" txt2="Coder Award"></Floatingdiv>
            </div>
            </div>
        </div>
    )
}
export default Intro;