import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<span><NavLink to="/login">Yael Maya &copy;</NavLink></span>
            
            <NavLink to="/admin">Admin</NavLink>
        </div>
    );
}

export default Footer;
