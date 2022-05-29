import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav-bar">
    <FontAwesomeIcon icon={faHome} size="lg" color='white' />
    </div>
  );
}

export default Navbar;
