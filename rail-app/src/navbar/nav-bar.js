import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import img from "../img/logo.png"
import './nav.css';


const Navbar = () => {
  return (
    <div className="nav-bar">
    {/* <img src={img} className="img-size"></img> */}
    <FontAwesomeIcon icon={faHome} size="lg" color='white' />
    </div>
  );
}

export default Navbar;
