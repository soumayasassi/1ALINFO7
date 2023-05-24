import { NavLink } from "react-router-dom";

function Navbar() {
    return (     <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive && "underline",
          })}
        >
          Home
        </NavLink>
        <br></br>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            textDecoration: isActive && "underline",
          })}
        >
          About
        </NavLink>
        
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            textDecoration: isActive && "underline",
          })}
        >
            <br></br>
          Contact
        </NavLink>
      </nav> );
}

export default Navbar;