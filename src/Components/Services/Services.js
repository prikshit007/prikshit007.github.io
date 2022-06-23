import "./Services.css";
// import heartemoji from "../img/heartemoji.png";

const Services=()=>{
    return(
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Frontend Developer with high level of Experience
                        in web designing and development<br></br>, producting the
                        quality work</span>
                <button className="button s-button">Download Cv</button>
            </div>
            <div className="cards">
                {/* <Card image={heartemoji} ></Card> */}
            </div>
        </div>

    )
}
export default Services;