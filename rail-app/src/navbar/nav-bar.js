import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import img from "../img/logo.png";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div>
                <NavLink to="/" className="img-link">
                    <img src={img} alt="Logo" className="img-size" />
                </NavLink>
            </div>
            <div className="nav-links">
                <div>
                    <NavLink to="/contact" className="link">
                        Contact
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/" className="link">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/login" className="link">
                        Login
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/signup" className="link">
                        SignUp
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
