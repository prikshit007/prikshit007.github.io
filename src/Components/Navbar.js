import { Link } from "react-router-dom";
import Toggle from '../Toggle/Toggle';
import './Navbar.css';

const Navbar=()=>{
    return(
        <div className='n-wrapper' id='Navbar'>
           <div className="n-left">
               <div className="n-name">Prikshit</div>
               <Toggle/>
           </div>
           <div className="n-right">
               <div className="n-list">
                   <ul>
                   <li>
              <Link activeClass="active" to="/" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              
              <Link to="/services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="/experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="/testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
                   </ul>
                   </div>
                   <Link to='/contact' spy={true} smooth={true}>
                   <button className="button n-button">
                       Contact
                   </button>
                   </Link>
               
           </div>
        </div>
    )
}

export default Navbar;