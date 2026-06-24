import { NavLink } from "react-router-dom";

//styles
import "../styles/main.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                About
            </NavLink>

            <NavLink to="/info" className={({ isActive }) => isActive ? "active" : ""}>
                Meals
            </NavLink>
        </div>
    )
}