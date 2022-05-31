import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import img from "../img/logo.png"
import './nav.css';
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink to = "/contact" className="nav-links">Contact</NavLink>
    {/* <img src={img} className="img-size"></img> */}
    <NavLink to = "/"><FontAwesomeIcon icon={faHome} size="lg" color='white' /></NavLink>
    
    <NavLink to = "/login" className="nav-links">Login</NavLink>
    <NavLink to = "/signup" className="nav-links">SignUp</NavLink>
    </div>
  );
}

export default Navbar;
