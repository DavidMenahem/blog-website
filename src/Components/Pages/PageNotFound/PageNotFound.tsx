import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<h2>Page not found:</h2>
            <NavLink to="/home">Home</NavLink>
        </div>
    );
}

export default PageNotFound;
