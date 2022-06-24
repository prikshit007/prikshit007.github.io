import "./Services.css";
// import heartemoji from "../img/heartemoji.png";
import heartemoji from '../../img/heartemoji.png';
import glassesimoji from '../../img/glassesimoji.png';
import Card from "../Card/Card";
import humble from '../../img/humble.png';
import Resume from './Resume.pdf'

const Services=()=>{
    return(
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Frontend Developer with high level of Experience
                        in web designing and development<br></br>, producting the
                        quality work</span>
                        <a href={Resume} download>
                <button className="button s-button">Download Cv</button>
                </a>
            </div>
            <div className="cards">
                <div style={{left:"19rem"}}>
                <Card emoji={heartemoji} heading="Developer" detail="Prikshit is Great" ></Card>
                </div>
                <div style={{top:"12rem",left:"-4rem"}}>
                <Card emoji={glassesimoji} heading="Developer" detail="Prikshit is Great" ></Card>
                </div>
                <div style={{top:"19rem",left:"12rem"}}>
                <Card emoji={humble} heading="Developer" detail="Prikshit is Great" ></Card>
                </div>
            </div>
        </div>

    )
}
export default Services;